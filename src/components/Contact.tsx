"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";
import { profile } from "@/data/profile";

const EMAIL = profile.email;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Fields = { name: string; email: string; topic: string; message: string };
type Errors = Partial<Record<keyof Fields, boolean>>;
type Status = "idle" | "invalid" | "drafted";

const emptyFields: Fields = { name: "", email: "", topic: "", message: "" };

const topics = [
  { value: "freelance", label: "Freelance / Contract Work" },
  { value: "fulltime", label: "Full-time Opportunity" },
  { value: "collaboration", label: "Project Collaboration" },
  { value: "consultation", label: "Technical Consultation" },
  { value: "other", label: "Something Else" },
];

function validate(f: Fields): Errors {
  return {
    name: f.name.trim().length === 0,
    email: !EMAIL_RE.test(f.email.trim()),
    topic: f.topic === "",
    message: f.message.trim().length === 0,
  };
}

const labelClass =
  "block text-[0.9375rem] font-semibold text-ink-900 mb-2";
const controlBase =
  "w-full px-4 py-3 rounded-xl bg-white border text-ink-900 text-base placeholder:text-ink-400 focus:outline-none focus:border-[#D96B43] focus:ring-2 focus:ring-[#D96B43]/20 transition-all";
const errorClass = "text-sm text-rose-700 mt-1.5";

const Required = () => <span className="text-[#D96B43]"> *</span>;

export default function Contact() {
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const border = (k: keyof Fields) =>
    errors[k] ? "border-rose-400" : "border-[#E5DFD5]";

  // Clear a field's error as soon as it becomes valid (mirrors the design's behaviour).
  const onChange =
    (key: keyof Fields) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const next = { ...fields, [key]: e.target.value };
      setFields(next);
      if (errors[key] && !validate(next)[key]) {
        setErrors((prev) => ({ ...prev, [key]: false }));
      }
    };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validate(fields);
    setErrors(result);

    if (Object.values(result).some(Boolean)) {
      setStatus("invalid");
      return;
    }

    // There is no form backend configured, so hand the message to the visitor's email
    // client instead of pretending it was sent. Replace with an API route / form service
    // when one is available.
    const topicLabel =
      topics.find((t) => t.value === fields.topic)?.label ?? fields.topic;
    const body = `${fields.message.trim()}\n\n— ${fields.name.trim()} (${fields.email.trim()})`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio inquiry: ${topicLabel}`
    )}&body=${encodeURIComponent(body)}`;
    setStatus("drafted");
    window.location.href = href;
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-y relative border-t border-ink-900/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Information & Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-5 text-left">
              <SectionBadge>Let&apos;s connect</SectionBadge>
              <h2 id="contact-heading" className="type-section text-ink-900">
                Have a project in mind?
                <br />
                Let&apos;s talk.
              </h2>
              <p className="type-body text-ink-700 max-w-md">
                Whether you&apos;re building a new product, improving an
                existing experience, or exploring an interesting engineering
                challenge, I&apos;d love to hear about it.
              </p>
              <div className="pt-2 select-none pointer-events-none">
                <span className="font-handwriting text-2xl sm:text-3xl text-ink-800 font-medium leading-none inline-block -rotate-3">
                  Good things start with a conversation ♡
                </span>
              </div>
            </div>

            {/* Direct Contact Details & Location Note */}
            <div className="pt-6 border-t border-black/[0.08] space-y-4">
              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-ink-800 hover:text-[#D96B43] transition-colors group touch-target py-1 w-max"
                >
                  <span className="w-9 h-9 rounded-full bg-black/[0.04] group-hover:bg-[#FCE5D7] flex items-center justify-center text-ink-800 transition-colors shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect height="16" rx="2" width="20" x="2" y="4" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold underline underline-offset-4 decoration-ink-400/50">
                    {EMAIL}
                  </span>
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink-800 hover:text-[#D96B43] transition-colors group touch-target py-1 w-max"
                >
                  <span className="w-9 h-9 rounded-full bg-black/[0.04] group-hover:bg-[#DFECFA] flex items-center justify-center text-ink-800 transition-colors shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect height="12" width="4" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  <span className="text-base font-semibold underline underline-offset-4 decoration-ink-400/50">
                    {profile.linkedinLabel}
                  </span>
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-2 text-[0.9375rem] text-ink-500 leading-relaxed">
                <svg
                  className="w-4 h-4 mt-0.5 text-ink-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 21c-4.418 0-8-5.373-8-12a8 8 0 1 1 16 0c0 6.627-3.582 12-8 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>Based in {profile.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] border border-ink-900/10 p-6 sm:p-10 relative">
              <div className="mb-6">
                <h3 className="type-title text-ink-900">
                  Send me a message
                </h3>
                <p className="type-small text-ink-700 mt-1.5">
                  Fill out the details below and I&apos;ll get back to you
                  shortly.
                </p>
              </div>

              {/* Status Message Banners */}
              <div aria-live="polite" role="status">
                {status === "drafted" && (
                  <div className="mb-6 p-4 rounded-2xl bg-pastel-mint border border-[#BEDEC6] text-emerald-950 text-sm sm:text-base flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <rect height="16" rx="2" width="20" x="2" y="4" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <p className="font-bold text-emerald-900">
                        Your email draft is ready.
                      </p>
                      <p className="mt-0.5 text-emerald-800">
                        Your email app should open with the message filled in.
                        It is only sent once you send it from there. If nothing
                        opens, write to me directly at{" "}
                        <a
                          className="underline underline-offset-2 font-semibold"
                          href={`mailto:${EMAIL}`}
                        >
                          {EMAIL}
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                )}
                {status === "invalid" && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-950 text-sm sm:text-base flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-rose-600 shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" x2="12" y1="8" y2="12" />
                      <line x1="12" x2="12.01" y1="16" y2="16" />
                    </svg>
                    <div>
                      <p className="font-bold text-rose-900">
                        Please resolve the highlighted fields below.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <form
                className="space-y-4 sm:space-y-5"
                noValidate
                onSubmit={onSubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className={labelClass} htmlFor="contact-name">
                      Your Name
                      <Required />
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={fields.name}
                      onChange={onChange("name")}
                      aria-invalid={errors.name || undefined}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className={cn(controlBase, "min-h-[46px]", border("name"))}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className={errorClass}>Please enter your name.</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="contact-email">
                      Email Address
                      <Required />
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="elena@company.com"
                      value={fields.email}
                      onChange={onChange("email")}
                      aria-invalid={errors.email || undefined}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className={cn(controlBase, "min-h-[46px]", border("email"))}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className={errorClass}>
                        Please enter a valid email address.
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-topic">
                    What would you like to discuss?
                    <Required />
                  </label>
                  <div className="relative">
                    <select
                      id="contact-topic"
                      name="topic"
                      required
                      value={fields.topic}
                      onChange={onChange("topic")}
                      aria-invalid={errors.topic || undefined}
                      aria-describedby={errors.topic ? "contact-topic-error" : undefined}
                      className={cn(
                        controlBase,
                        "min-h-[46px] appearance-none cursor-pointer pr-10",
                        border("topic")
                      )}
                    >
                      <option value="" disabled>
                        Select an option...
                      </option>
                      {topics.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-ink-500">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>
                  {errors.topic && (
                    <p id="contact-topic-error" className={errorClass}>
                      Please select a discussion topic.
                    </p>
                  )}
                </div>

                <div>
                  <label className={labelClass} htmlFor="contact-message">
                    Project Details
                    <Required />
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Tell me a little about your idea, goals, or the problem you're trying to solve…"
                    value={fields.message}
                    onChange={onChange("message")}
                    aria-invalid={errors.message || undefined}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={cn(
                      controlBase,
                      "resize-y min-h-[110px]",
                      border("message")
                    )}
                  />
                  {errors.message && (
                    <p id="contact-message-error" className={errorClass}>
                      Please enter your project details.
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto"
                  >
                    <span>Send Message</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                  <p className="text-sm text-ink-700 mt-3">
                    Submitting opens a pre-filled email in your email app.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
