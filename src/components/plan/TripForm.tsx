"use client";

import { useState } from "react";
import { Clock } from "lucide-react";
import {
  BUDGET_OPTIONS,
  TRANSPORT_MODE_OPTIONS,
  ACCOMMODATION_OPTIONS,
  LOCAL_TRANSPORT_OPTIONS,
} from "@/lib/constants";
import type { TripFormData, FormErrors } from "@/lib/types";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FormSuccess from "./FormSuccess";

const initialData: TripFormData = {
  destination: "",
  duration: "",
  travelers: "",
  children: "",
  budget: "",
  transportMode: "",
  startDate: "",
  accommodationType: "",
  localTransport: "",
  activities: "",
  dreamTrip: "",
  fullName: "",
  city: "",
  email: "",
  countryCode: "+32",
  phone: "",
};

function validate(data: TripFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.destination.trim()) errors.destination = "Destination is required";
  if (!data.travelers.trim()) errors.travelers = "Number of travelers is required";
  if (!data.budget) errors.budget = "Please select a budget";
  if (!data.fullName.trim()) errors.fullName = "Full name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
}

function TextInput({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, val: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[12px] uppercase tracking-[0.15em] font-medium text-navy-800 mb-2">
        {label} {required && <span className="text-gold-600">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className={`w-full border-b ${
          error ? "border-red-400" : "border-slate-300 focus:border-gold-500"
        } bg-transparent px-0 py-3 text-[14px] text-navy-950 placeholder-slate-400 outline-none transition-all`}
      />
      {error && <p className="mt-1.5 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (name: string, val: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <p className="text-[12px] uppercase tracking-[0.15em] font-medium text-navy-800 mb-3">
        {label} {required && <span className="text-gold-600">*</span>}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(name, opt)}
            className={`px-5 py-2.5 text-[12px] border transition-all duration-300 cursor-pointer ${
              value === opt
                ? "bg-navy-950 border-navy-950 text-white font-medium"
                : "border-slate-300 text-slate-600 hover:border-navy-950 hover:text-navy-950"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {error && <p className="mt-1.5 text-[11px] text-red-500">{error}</p>}
    </div>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, val: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[12px] uppercase tracking-[0.15em] font-medium text-navy-800 mb-2">
        {label}
      </label>
      <textarea
        id={name}
        rows={rows}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-[14px] text-navy-950 placeholder-slate-400 outline-none focus:border-gold-500 transition-all resize-none"
      />
    </div>
  );
}

export default function TripForm() {
  const [data, setData] = useState<TripFormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, val: string) => {
    setData((prev) => ({ ...prev, [name]: val }));
    if (errors[name]) setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-28 bg-cream-50">
        <Container>
          <FormSuccess />
        </Container>
      </section>
    );
  }

  return (
    <section className="py-28 bg-cream-50 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <Container className="relative z-10">
        <SectionHeading
          title="Plan Your Holiday the Easy Way"
          subtitle="Tell us your wishes and we'll design the perfect trip for you."
          light
        />

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-white border border-slate-200/80 p-8 sm:p-12 space-y-12"
        >
          {/* Trip Details */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-gold-500" />
              <h3 className="font-display text-lg text-navy-950">Trip Details</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <TextInput
                  label="Wished Destination(s)"
                  name="destination"
                  value={data.destination}
                  onChange={handleChange}
                  error={errors.destination}
                  placeholder="Specify the place(s) you want to visit"
                  required
                />
              </div>
              <TextInput
                label="Duration (days)"
                name="duration"
                value={data.duration}
                onChange={handleChange}
                placeholder="e.g. 7"
                type="number"
              />
              <TextInput
                label="Number of Travelers"
                name="travelers"
                value={data.travelers}
                onChange={handleChange}
                error={errors.travelers}
                placeholder="e.g. 2"
                type="number"
                required
              />
              <TextInput
                label="Children"
                name="children"
                value={data.children}
                onChange={handleChange}
                placeholder="e.g. 0"
                type="number"
              />
              <TextInput
                label="Start Date"
                name="startDate"
                value={data.startDate}
                onChange={handleChange}
                type="date"
              />
            </div>
            <div className="mt-8 space-y-6">
              <RadioGroup
                label="Budget"
                name="budget"
                options={BUDGET_OPTIONS}
                value={data.budget}
                onChange={handleChange}
                error={errors.budget}
                required
              />
              <RadioGroup
                label="Reach Your Destination By"
                name="transportMode"
                options={TRANSPORT_MODE_OPTIONS}
                value={data.transportMode}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Preferences */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-gold-500" />
              <h3 className="font-display text-lg text-navy-950">Preferences</h3>
            </div>
            <div className="space-y-6">
              <RadioGroup
                label="Type of Accommodation"
                name="accommodationType"
                options={ACCOMMODATION_OPTIONS}
                value={data.accommodationType}
                onChange={handleChange}
              />
              <RadioGroup
                label="Local Transportation"
                name="localTransport"
                options={LOCAL_TRANSPORT_OPTIONS}
                value={data.localTransport}
                onChange={handleChange}
              />
              <TextArea
                label="Activities & Interests"
                name="activities"
                value={data.activities}
                onChange={handleChange}
                placeholder="Sightseeing, adventure sports, relaxation, cultural experiences..."
              />
            </div>
          </div>

          {/* Dream Trip */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-gold-500" />
              <h3 className="font-display text-lg text-navy-950">Your Dream Trip</h3>
            </div>
            <TextArea
              label="Describe Your Dream Trip"
              name="dreamTrip"
              value={data.dreamTrip}
              onChange={handleChange}
              placeholder="Tell us more about your wishes and trip"
              rows={4}
            />
          </div>

          {/* Personal Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-6 bg-gold-500" />
              <h3 className="font-display text-lg text-navy-950">Personal Information</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <TextInput
                label="Full Name"
                name="fullName"
                value={data.fullName}
                onChange={handleChange}
                error={errors.fullName}
                placeholder="Enter your full name"
                required
              />
              <TextInput
                label="City of Residence"
                name="city"
                value={data.city}
                onChange={handleChange}
                placeholder="Your current city"
              />
              <TextInput
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="your@email.com"
                type="email"
              />
              <div className="flex gap-3">
                <div className="w-24">
                  <label htmlFor="countryCode" className="block text-[12px] uppercase tracking-[0.15em] font-medium text-navy-800 mb-2">
                    Code
                  </label>
                  <select
                    id="countryCode"
                    value={data.countryCode}
                    onChange={(e) => handleChange("countryCode", e.target.value)}
                    className="w-full border-b border-slate-300 bg-transparent px-0 py-3 text-[14px] text-navy-950 outline-none focus:border-gold-500 transition-all"
                  >
                    <option value="+32">+32</option>
                    <option value="+31">+31</option>
                    <option value="+33">+33</option>
                    <option value="+49">+49</option>
                    <option value="+44">+44</option>
                    <option value="+1">+1</option>
                    <option value="+34">+34</option>
                    <option value="+39">+39</option>
                    <option value="+90">+90</option>
                    <option value="+212">+212</option>
                  </select>
                </div>
                <div className="flex-1">
                  <TextInput
                    label="Phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="Phone number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-12 py-4 text-[12px] uppercase tracking-[0.2em] font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-lg shadow-gold-500/15 hover:shadow-gold-500/30 transition-all duration-400 cursor-pointer"
            >
              Start Planning Now
            </button>
            <div className="mt-5 flex items-center justify-center gap-2 text-[11px] text-slate-400 tracking-wide">
              <Clock size={12} />
              <span>We respond within 24 hours</span>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
}
