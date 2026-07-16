"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChangeEvent,
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  useState,
} from "react";
import { useLanguage } from "@/components/LanguageContext";

const EASE = [0.4, 0, 0.2, 1] as const;
const PHONE_PREFIX = "+998 ";
const PHONE_DIGIT_LIMIT = 9;

type ObjectType = "house" | "land" | "commercial";
type Step = 1 | 2 | 3;

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 28 : -28,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -28 : 28,
    opacity: 0,
  }),
};

function extractLocalDigits(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("998")) {
    return digits.slice(3, 3 + PHONE_DIGIT_LIMIT);
  }
  return digits.slice(0, PHONE_DIGIT_LIMIT);
}

export default function Calculator() {
  const { t, language } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState(1);
  const [objectType, setObjectType] = useState<ObjectType | null>(null);
  const [area, setArea] = useState("");
  const [phoneDigits, setPhoneDigits] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const areaNumber = Number(area.replace(",", "."));
  const phoneValue = `${PHONE_PREFIX}${phoneDigits}`;
  const fullPhone = `+998${phoneDigits}`;

  if (!t || !t.calculator) return null;

  const c = t.calculator;
  const areaUnitLabel = objectType === "land" ? c.areaLabelSotka : c.areaLabelM2;
  const areaUnitShort =
    objectType === "land" ? (language === "uz" ? "sotix" : "соток") : "м²";

  const detailsPlaceholder =
    objectType === "land"
      ? c.detailsPlaceholderLand
      : objectType === "commercial"
        ? c.detailsPlaceholderCommercial
        : c.detailsPlaceholderHouse;

  const objectOptions: { id: ObjectType; label: string }[] = [
    { id: "house", label: c.house },
    { id: "land", label: c.land },
    { id: "commercial", label: c.commercial },
  ];

  const goTo = (next: Step, dir: number) => {
    setDirection(dir);
    setError("");
    setStep(next);
  };

  const validateStep = (current: Step) => {
    if (current === 1 && !objectType) {
      setError(c.errorType);
      return false;
    }
    if (current === 2) {
      if (!area.trim() || Number.isNaN(areaNumber) || areaNumber <= 0) {
        setError(c.errorArea);
        return false;
      }
    }
    if (current === 3 && phoneDigits.length < PHONE_DIGIT_LIMIT) {
      setError(c.errorPhone);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    if (step < 3) goTo((step + 1) as Step, 1);
  };

  const handleBack = () => {
    if (step > 1) goTo((step - 1) as Step, -1);
  };

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneDigits(extractLocalDigits(event.target.value));
    setError("");
  };

  const handlePhoneKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    const selectionStart = input.selectionStart ?? 0;
    const selectionEnd = input.selectionEnd ?? 0;
    const prefixLength = PHONE_PREFIX.length;

    if (event.key === "Backspace" || event.key === "Delete") {
      if (selectionStart < prefixLength) {
        event.preventDefault();
        if (selectionEnd > prefixLength) {
          setPhoneDigits(phoneDigits.slice(selectionEnd - prefixLength));
        }
        return;
      }
    }

    if (
      selectionStart < prefixLength &&
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab", "Home", "End"].includes(
        event.key,
      ) &&
      !event.metaKey &&
      !event.ctrlKey
    ) {
      event.preventDefault();
      input.setSelectionRange(prefixLength, prefixLength);
    }
  };

  const guardPhoneCaret = (input: HTMLInputElement) => {
    const prefixLength = PHONE_PREFIX.length;
    const start = input.selectionStart ?? 0;
    const end = input.selectionEnd ?? 0;
    if (start < prefixLength || end < prefixLength) {
      input.setSelectionRange(
        Math.max(start, prefixLength),
        Math.max(end, prefixLength),
      );
    }
  };

  const handlePhonePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPhoneDigits(extractLocalDigits(event.clipboardData.getData("text")));
    setError("");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (!validateStep(3) || !objectType) return;

    setIsSubmitting(true);
    setError("");

    const objectLabel =
      objectOptions.find((option) => option.id === objectType)?.label || objectType;

    try {
      const response = await fetch("/api/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          objectType: objectLabel,
          area: `${areaNumber} ${areaUnitShort}`,
          phone: fullPhone,
          details: details.trim(),
        }),
      });

      if (!response.ok) {
        setError(c.errorSubmit);
        return;
      }

      setSubmitted(true);
    } catch {
      setError(c.errorSubmit);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    setDirection(-1);
    setObjectType(null);
    setArea("");
    setPhoneDigits("");
    setDetails("");
    setError("");
  };

  return (
    <section
      id="calculator"
      className="bg-[var(--paper-soft)] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-xl">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-black tracking-tight text-[var(--ink-900)] sm:text-3xl md:text-4xl">
            {c.title}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm font-medium leading-relaxed text-[var(--ink-600)] sm:text-base">
            {c.subtitle}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="rounded-[1.75rem] border border-[var(--paper-muted)] bg-[var(--paper)] p-5 shadow-[var(--shadow-card-md)] sm:p-8"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex flex-col items-center py-8 text-center sm:py-10"
              >
                <motion.div
                  initial={{ scale: 0.86, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}
                  className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[color:color-mix(in_srgb,var(--gold-500)_35%,transparent)] bg-[color:color-mix(in_srgb,var(--gold-500)_14%,transparent)] text-[var(--gold-500)] shadow-[var(--shadow-gold-glow)]"
                >
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <motion.path
                      d="M4.5 12.75l6 6 9-13.5"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.55, ease: EASE, delay: 0.15 }}
                    />
                  </svg>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.2 }}
                  className="text-xl font-black text-[var(--ink-900)] sm:text-2xl"
                >
                  {c.successTitle}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.28 }}
                  className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--ink-600)] sm:text-base"
                >
                  {c.successText}
                </motion.p>

                <motion.button
                  type="button"
                  onClick={handleReset}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.36 }}
                  className="mt-8 rounded-2xl border border-[var(--paper-muted)] bg-[var(--paper-soft)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--ink-900)] transition-colors duration-300 hover:border-[color:color-mix(in_srgb,var(--gold-500)_40%,transparent)] hover:bg-[var(--paper)]"
                >
                  {c.reset}
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE }}
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--ink-600)] sm:text-sm">
                    {c.stepOf} {step} {c.of} 3
                  </p>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map((item) => (
                      <span
                        key={item}
                        className={`h-1.5 w-8 rounded-full transition-colors duration-300 sm:w-10 ${
                          item <= step
                            ? "bg-[var(--gold-500)]"
                            : "bg-[var(--paper-muted)]"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="relative min-h-[260px] overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={step}
                      custom={direction}
                      variants={stepVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      {step === 1 && (
                        <div>
                          <h3 className="mb-5 text-lg font-black text-[var(--ink-900)] sm:text-xl">
                            {c.step1}
                          </h3>
                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {objectOptions.map((option) => {
                              const active = objectType === option.id;
                              return (
                                <button
                                  key={option.id}
                                  type="button"
                                  onClick={() => {
                                    setObjectType(option.id);
                                    setError("");
                                  }}
                                  className={`rounded-2xl border px-4 py-4 text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 sm:py-5 ${
                                    active
                                      ? "border-[var(--gold-500)] bg-[color:color-mix(in_srgb,var(--gold-500)_12%,transparent)] text-[var(--ink-900)] shadow-[var(--shadow-card-sm)]"
                                      : "border-[var(--paper-muted)] bg-[var(--paper-soft)] text-[var(--ink-600)] hover:border-[color:color-mix(in_srgb,var(--gold-500)_45%,transparent)] hover:text-[var(--ink-900)]"
                                  }`}
                                >
                                  {option.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div>
                          <h3 className="mb-5 text-lg font-black text-[var(--ink-900)] sm:text-xl">
                            {c.step2}
                          </h3>
                          <label className="mb-2 block text-sm font-bold text-[var(--ink-600)]">
                            {areaUnitLabel}
                          </label>
                          <input
                            type="number"
                            inputMode="decimal"
                            min="0"
                            step="any"
                            value={area}
                            onChange={(event) => {
                              setArea(event.target.value);
                              setError("");
                            }}
                            placeholder={c.areaPlaceholder}
                            className="w-full rounded-2xl border border-[var(--paper-muted)] bg-[var(--paper-soft)] px-4 py-4 text-base font-medium text-[var(--ink-900)] outline-none transition-colors duration-300 placeholder:text-[var(--slate-400)] focus:border-[var(--gold-500)] focus:bg-[var(--paper)]"
                          />
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-5">
                          <h3 className="text-lg font-black text-[var(--ink-900)] sm:text-xl">
                            {c.step3}
                          </h3>

                          <div>
                            <label className="mb-2 block text-sm font-bold text-[var(--ink-600)]">
                              {c.phoneLabel}
                            </label>
                            <input
                              type="tel"
                              inputMode="numeric"
                              autoComplete="tel"
                              value={phoneValue}
                              onChange={handlePhoneChange}
                              onKeyDown={handlePhoneKeyDown}
                              onPaste={handlePhonePaste}
                              onFocus={(event) => guardPhoneCaret(event.currentTarget)}
                              onSelect={(event) => guardPhoneCaret(event.currentTarget)}
                              onClick={(event) => guardPhoneCaret(event.currentTarget)}
                              className="w-full rounded-2xl border border-[var(--paper-muted)] bg-[var(--paper-soft)] px-4 py-4 text-base font-medium text-[var(--ink-900)] outline-none transition-colors duration-300 focus:border-[var(--gold-500)] focus:bg-[var(--paper)]"
                            />
                          </div>

                          <div>
                            <label className="mb-2 block text-sm font-bold text-[var(--ink-600)]">
                              {c.detailsLabel}
                            </label>
                            <textarea
                              rows={4}
                              value={details}
                              onChange={(event) => setDetails(event.target.value)}
                              placeholder={detailsPlaceholder}
                              className="w-full resize-none rounded-2xl border border-[var(--paper-muted)] bg-[var(--paper-soft)] px-4 py-4 text-base font-medium text-[var(--ink-900)] outline-none transition-colors duration-300 placeholder:text-[var(--slate-400)] focus:border-[var(--gold-500)] focus:bg-[var(--paper)]"
                            />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {error && (
                    <p className="mt-4 text-sm font-medium text-red-600" role="alert">
                      {error}
                    </p>
                  )}

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        className="order-2 w-full rounded-2xl border border-[var(--paper-muted)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--ink-600)] transition-colors duration-300 hover:bg-[var(--paper-soft)] hover:text-[var(--ink-900)] disabled:opacity-50 sm:order-1 sm:w-auto"
                      >
                        {c.back}
                      </button>
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="order-1 w-full rounded-2xl bg-[var(--gold-500)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--ink-950)] shadow-[var(--shadow-gold-glow)] transition-all duration-300 hover:bg-[var(--gold-600)] sm:order-2 sm:ml-auto sm:w-auto"
                      >
                        {c.next}
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="order-1 w-full rounded-2xl bg-[var(--gold-500)] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[var(--ink-950)] shadow-[var(--shadow-gold-glow)] transition-all duration-300 hover:bg-[var(--gold-600)] disabled:opacity-60 sm:order-2 sm:ml-auto sm:w-auto"
                      >
                        {isSubmitting ? c.submitting : c.submit}
                      </button>
                    )}
                  </div>

                  {step === 3 && (
                    <p className="mt-4 text-center text-sm font-medium text-[var(--ink-600)]">
                      {c.trustNote}
                    </p>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
