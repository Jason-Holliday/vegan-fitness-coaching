"use client";

import {
  ArrowRight,
  Check,
  Dumbbell,
  Euro,
  Flame,
  Leaf,
  ShieldCheck,
  Target,
  Users,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type Choice = {
  value: string;
  title: string;
  text: string;
  mark: string;
  icon?: LucideIcon;
};

const goalOptions: Choice[] = [
  {
    value: "Muskelaufbau",
    title: "Muskelaufbau",
    text: "Stärker werden und gezielt Muskulatur aufbauen.",
    mark: "",
    icon: Dumbbell,
  },
  {
    value: "Fett verlieren",
    title: "Fett verlieren",
    text: "Körperfett reduzieren und definierter werden.",
    mark: "",
    icon: Flame,
  },
  {
    value: "Gesünder leben",
    title: "Gesünder leben",
    text: "Ernährung und Alltag langfristig verbessern.",
    mark: "",
    icon: Leaf,
  },
  {
    value: "Fitter werden",
    title: "Fitter werden",
    text: "Mehr Energie, Leistung und Fitness entwickeln.",
    mark: "",
    icon: Target,
  },
];

const levelOptions: Choice[] = [
  {
    value: "Kaum Trainingserfahrung",
    title: "Ich starte gerade",
    text: "Ich habe bisher kaum oder gar nicht regelmäßig trainiert.",
    mark: "01",
  },
  {
    value: "Unregelmäßiges Training",
    title: "Ich trainiere unregelmäßig",
    text: "Ich kenne die Grundlagen, aber mir fehlt noch Konstanz.",
    mark: "02",
  },
  {
    value: "Regelmäßiges Training",
    title: "Ich trainiere regelmäßig",
    text: "Training gehört bereits fest zu meinem Alltag.",
    mark: "03",
  },
  {
    value: "Mehrjährige Erfahrung",
    title: "Ich bin erfahren",
    text: "Ich trainiere seit mehreren Jahren strukturiert.",
    mark: "04",
  },
];

const dietOptions: Choice[] = [
  {
    value: "Mit Fleisch",
    title: "Ich esse Fleisch",
    text: "Fleisch und andere tierische Lebensmittel gehören aktuell zu meiner Ernährung.",
    mark: "",
    icon: Utensils,
  },
  {
    value: "Vegetarisch",
    title: "Vegetarisch",
    text: "Ich esse kein Fleisch, aber noch andere tierische Produkte.",
    mark: "",
    icon: Leaf,
  },
  {
    value: "Überwiegend pflanzlich",
    title: "Überwiegend pflanzlich",
    text: "Der Großteil meiner Ernährung ist bereits pflanzlich.",
    mark: "",
    icon: Leaf,
  },
  {
    value: "Vegan",
    title: "Vegan",
    text: "Ich ernähre mich bereits vollständig ohne tierische Produkte.",
    mark: "",
    icon: Check,
  },
];

const budgetOptions: Choice[] = [
  {
    value: "Unter 500 €",
    title: "Unter 500 €",
    text: "Ich möchte mit einem kleineren Einstiegsbudget starten.",
    mark: "€",
  },
  {
    value: "500 bis 1.000 €",
    title: "500 – 1.000 €",
    text: "Solide Basis für ein strukturiertes Programm.",
    mark: "€€",
  },
  {
    value: "1.000 bis 2.000 €",
    title: "1.000 – 2.000 €",
    text: "Für ein intensives, engmaschig betreutes 1:1-Programm.",
    mark: "€€€",
  },
  {
    value: "Noch unsicher",
    title: "Noch unsicher",
    text: "Ich möchte mich vorab beraten lassen.",
    mark: "?",
  },
];

type ChoiceSteps = "goal" | "level" | "diet" | "budget";

const steps: {
  key: ChoiceSteps;
  icon: LucideIcon;
  legend: string;
  description: string;
  options: Choice[];
}[] = [
  {
    key: "goal",
    icon: Target,
    legend: "Was möchtest du erreichen?",
    description: "Wähle das Ziel aus, das aktuell am besten zu dir passt.",
    options: goalOptions,
  },
  {
    key: "level",
    icon: Dumbbell,
    legend: "Wie sieht dein Training aktuell aus?",
    description:
      "Damit ich besser einschätzen kann, wie viel Trainingserfahrung du bereits mitbringst.",
    options: levelOptions,
  },
  {
    key: "diet",
    icon: Leaf,
    legend: "Wie ernährst du dich aktuell?",
    description:
      "Es geht nur darum, wo du gerade stehst, damit die Empfehlung später wirklich zu deinem Alltag passt.",
    options: dietOptions,
  },
  {
    key: "budget",
    icon: Euro,
    legend: "Welches Budget stellst du dir für dein Coaching-Programm vor?",
    description:
      "Damit ich dir ein Programm vorschlagen kann, das zu deinem Rahmen passt. Es handelt sich um den Gesamtpreis für dein Programm, nicht um einen monatlichen Betrag.",
    options: budgetOptions,
  },
];

const TOTAL_STEPS = steps.length + 1;

type FormData = {
  goal: string;
  level: string;
  diet: string;
  budget: string;
  firstName: string;
  lastName: string;
  email: string;
};

const initialData: FormData = {
  goal: "",
  level: "",
  diet: "",
  budget: "",
  firstName: "",
  lastName: "",
  email: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function OptionCard({
  option,
  selected,
  onSelect,
  invalid,
}: {
  option: Choice;
  selected: boolean;
  onSelect: () => void;
  invalid: boolean;
}) {
  const Icon = option.icon;

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={`flex items-start gap-3.5 rounded-2xl border-2 p-4 text-left transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral ${
        selected
          ? "border-brand-coral bg-brand-coral/10"
          : invalid
            ? "border-red-400 bg-red-500/10"
            : "border-white/10 bg-white/5 hover:border-brand-coral/40"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-300 ease-out ${
          selected
            ? "bg-brand-coral text-black"
            : "bg-brand-coral/10 text-brand-coral"
        }`}
      >
        {Icon ? <Icon className="h-4.5 w-4.5" /> : option.mark}
      </span>

      <span>
        <span className="block text-sm font-bold text-white">
          {option.title}
        </span>
        <span className="mt-1 block text-sm text-white">
          {option.text}
        </span>
      </span>
    </button>
  );
}

type ContactFieldKey = "firstName" | "lastName" | "email";

const contactFields: ContactFieldKey[] = ["firstName", "lastName", "email"];

const contactErrorMessages: Record<ContactFieldKey, string> = {
  firstName: "Bitte gib deinen Vornamen ein.",
  lastName: "Bitte gib deinen Nachnamen ein.",
  email: "Bitte gib deine E-Mail-Adresse ein.",
};

function isContactFieldValid(field: ContactFieldKey, value: string) {
  return field === "email"
    ? EMAIL_PATTERN.test(value.trim())
    : value.trim().length > 0;
}

function ContactField({
  id,
  label,
  type = "text",
  autoComplete,
  value,
  error,
  onChange,
}: {
  id: ContactFieldKey;
  label: string;
  type?: string;
  autoComplete: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const errorId = `${id}-error`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border-[1.5px] px-4 py-3 text-white outline-none transition-colors duration-300 ease-out focus:border-brand-coral ${
          error ? "border-red-400 bg-red-500/10" : "border-white/15 bg-white/5"
        }`}
      />
      {error && (
        <p id={errorId} className="mt-2 text-sm font-semibold text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

export default function CoachingForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [invalidFields, setInvalidFields] = useState<Set<string>>(new Set());

  const isChoiceStep = stepIndex < steps.length;
  const currentChoiceStep = isChoiceStep ? steps[stepIndex] : null;
  const currentStepNumber = stepIndex + 1;
  const progress = submitted
    ? 100
    : Math.round((currentStepNumber / TOTAL_STEPS) * 100);

  const validateChoiceStep = () => {
    if (!currentChoiceStep) return true;
    const value = data[currentChoiceStep.key];
    if (!value) {
      setInvalidFields(new Set([currentChoiceStep.key]));
      setError("Bitte triff eine Auswahl, bevor du fortfährst.");
      return false;
    }
    setInvalidFields(new Set());
    setError(null);
    return true;
  };

  const validateContactStep = () => {
    const missing = new Set<string>();
    for (const field of contactFields) {
      if (!isContactFieldValid(field, data[field])) missing.add(field);
    }

    if (missing.size > 0) {
      setInvalidFields(missing);
      setError(
        missing.size === 1
          ? "Bitte fülle das markierte Feld korrekt aus."
          : "Bitte fülle die markierten Felder korrekt aus.",
      );
      return false;
    }

    setInvalidFields(new Set());
    setError(null);
    return true;
  };

  const updateContactField = (field: ContactFieldKey, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (!invalidFields.has(field) || !isContactFieldValid(field, value)) return;

    const next = new Set(invalidFields);
    next.delete(field);
    setInvalidFields(next);
    if (next.size === 0) setError(null);
  };

  const contactError = (field: ContactFieldKey) => {
    if (!invalidFields.has(field)) return undefined;
    if (field === "email" && data.email.trim()) {
      return "Bitte gib eine gültige E-Mail-Adresse ein.";
    }
    return contactErrorMessages[field];
  };

  const handleNext = () => {
    const isValid = isChoiceStep ? validateChoiceStep() : validateContactStep();
    if (!isValid) return;

    if (stepIndex < TOTAL_STEPS - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      // TODO: an echten Endpoint/E-Mail-Versand anbinden, sobald vorhanden.
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    setError(null);
    setInvalidFields(new Set());
    setStepIndex((prev) => Math.max(0, prev - 1));
  };

  if (submitted) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto flex h-18 w-18 items-center justify-center rounded-full bg-brand-coral/10 text-brand-coral">
          <Check className="h-8 w-8" />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold text-white">
          Vielen Dank.
        </h2>
        <p className="mt-3 text-base text-white">
          Deine Anfrage wurde erfolgreich übermittelt. Ich melde mich so
          schnell wie möglich bei dir.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Starte deinen Weg.
      </h2>
      <p className="mt-3 text-base text-white">
        Beantworte ein paar kurze Fragen, damit ich besser einschätzen kann,
        wo du gerade stehst und wie ich dich unterstützen kann.
      </p>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between text-sm text-white">
          <span>
            Schritt {currentStepNumber} von {TOTAL_STEPS}
          </span>
          <span>{progress} %</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-brand-coral transition-[width] duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {error && (
        <div
          role="alert"
          className="mt-6 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-300"
        >
          {error}
        </div>
      )}

      {currentChoiceStep ? (
        <fieldset className="mt-8">
          <div className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-coral/10 text-brand-coral">
              <currentChoiceStep.icon className="h-5.5 w-5.5" />
            </span>
            <legend className="text-xl font-bold text-white sm:text-2xl">
              {currentChoiceStep.legend}
            </legend>
          </div>
          <p className="mt-2 ml-[62px] text-sm text-white">
            {currentChoiceStep.description}
          </p>

          <div
            role="radiogroup"
            aria-label={currentChoiceStep.legend}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            {currentChoiceStep.options.map((option) => (
              <OptionCard
                key={option.value}
                option={option}
                selected={data[currentChoiceStep.key] === option.value}
                invalid={invalidFields.has(currentChoiceStep.key)}
                onSelect={() => {
                  setData((prev) => ({
                    ...prev,
                    [currentChoiceStep.key]: option.value,
                  }));
                  setInvalidFields(new Set());
                  setError(null);
                }}
              />
            ))}
          </div>
        </fieldset>
      ) : (
        <fieldset className="mt-8">
          <div className="flex items-center gap-3.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-coral/10 text-brand-coral">
              <Users className="h-5.5 w-5.5" />
            </span>
            <legend className="text-xl font-bold text-white sm:text-2xl">
              Fast geschafft.
            </legend>
          </div>
          <p className="mt-2 ml-[62px] text-sm text-white">
            Hinterlasse deine Kontaktdaten, damit ich mich bei dir melden
            kann.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <ContactField
              id="firstName"
              label="Vorname"
              autoComplete="given-name"
              value={data.firstName}
              error={contactError("firstName")}
              onChange={(value) => updateContactField("firstName", value)}
            />
            <ContactField
              id="lastName"
              label="Nachname"
              autoComplete="family-name"
              value={data.lastName}
              error={contactError("lastName")}
              onChange={(value) => updateContactField("lastName", value)}
            />
          </div>

          <div className="mt-4">
            <ContactField
              id="email"
              label="E-Mail-Adresse"
              type="email"
              autoComplete="email"
              value={data.email}
              error={contactError("email")}
              onChange={(value) => updateContactField("email", value)}
            />
          </div>

          <div className="mt-5 flex items-start gap-2.5 text-sm text-white">
            <ShieldCheck className="mt-0.5 h-4.5 w-4.5 shrink-0" />
            <span>
              Deine Angaben werden ausschließlich zur Bearbeitung deiner
              Coaching-Anfrage verwendet.
            </span>
          </div>
        </fieldset>
      )}

      <div className="mt-8 flex justify-between gap-3">
        {stepIndex > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white transition-colors duration-300 ease-out hover:bg-brand-coral hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
          >
            Zurück
          </button>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={handleNext}
          className="inline-flex items-center gap-2 rounded-full border-2 border-brand-coral bg-brand-coral px-5 py-3 text-sm font-bold text-black transition-colors duration-300 ease-out hover:bg-transparent hover:text-brand-coral focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-coral"
        >
          {stepIndex === TOTAL_STEPS - 1 ? "Anfrage senden" : "Weiter"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
