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
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-stone-100/50">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-900">
            I'd Love to <span className="italic font-light text-stone-600">Hear From You</span>
          </h2>
          <p className="text-lg text-stone-700 max-w-2xl mx-auto">
            Tell me about your family and what you're looking for in a home. Whether you're just
            starting to explore or ready to make a move, I'm here to help every step of the way.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 space-y-6 shadow-lg">
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
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                  className="bg-stone-50 border-stone-300 focus:border-stone-500 h-12 focus:ring-stone-200"
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
                  placeholder="your.email@example.com"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="bg-stone-50 border-stone-300 focus:border-stone-500 h-12 focus:ring-stone-200"
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
                  className="bg-stone-50 border-stone-300 focus:border-stone-500 h-12 focus:ring-stone-200"
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
                  placeholder="Looking for a family home"
                  {...register('subject', { required: 'Subject is required' })}
                  className="bg-stone-50 border-stone-300 focus:border-stone-500 h-12 focus:ring-stone-200"
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
                placeholder="Tell me about your family and what you're looking for... How many kids do you have? What neighborhoods interest you? Are good schools a priority?"
                rows={6}
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 10,
                    message: 'Message must be at least 10 characters',
                  },
                })}
                className="bg-stone-50 border-stone-300 focus:border-stone-500 resize-none focus:ring-stone-200"
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
              className="w-full h-12 bg-gradient-to-r from-stone-700 to-stone-800 text-white hover:from-stone-800 hover:to-stone-900 font-medium text-base shadow-md hover:shadow-lg transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                'Start the Conversation'
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-stone-600 text-center">
              Your privacy matters. I will never share your family's information with anyone.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
