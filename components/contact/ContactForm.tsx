'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  botcheck: boolean;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState<string>('');

  // Replace with your actual Web3Forms access key
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: 'Real Estate Contact Form',
      subject: 'New Contact Message from Real Estate Website',
    },
    onSuccess: msg => {
      setIsSuccess(true);
      setResult(msg);
      reset();
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setResult('');
      }, 5000);
    },
    onError: msg => {
      setIsSuccess(false);
      setResult(msg);
    },
  });

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Send Me a <span className="italic font-light">Message</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Fill out the form below and I'll get back to you as soon as possible. All fields are required.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50 rounded-3xl p-8 md:p-12 space-y-6">
            {/* Success/Error Message */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 p-4 rounded-xl ${
                  isSuccess ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                }`}
              >
                {isSuccess ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p className={`text-sm ${isSuccess ? 'text-green-800' : 'text-red-800'}`}>{result}</p>
              </motion.div>
            )}

            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-900 font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...register('name', { required: 'Name is required' })}
                  className="bg-white border-slate-300 focus:border-black h-12"
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-900 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="bg-white border-slate-300 focus:border-black h-12"
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            {/* Phone and Subject Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-900 font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(407) 555-0123"
                  {...register('phone', { required: 'Phone number is required' })}
                  className="bg-white border-slate-300 focus:border-black h-12"
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-900 font-medium">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="I'm interested in buying a home"
                  {...register('subject', { required: 'Subject is required' })}
                  className="bg-white border-slate-300 focus:border-black h-12"
                />
                {errors.subject && <p className="text-sm text-red-600">{errors.subject.message}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-900 font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell me about your real estate needs..."
                rows={6}
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters',
                  },
                })}
                className="bg-white border-slate-300 focus:border-black resize-none"
              />
              {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
            </div>

            {/* Honeypot field for spam protection */}
            <input
              type="checkbox"
              id="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              {...register('botcheck')}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-black text-white hover:bg-black/90 font-medium text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-slate-500 text-center">
              By submitting this form, you agree to our privacy policy. We will never share your information with third
              parties.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
