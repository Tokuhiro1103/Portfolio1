import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const formRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm(
      'service_sidgwwm', // サービスID
      'template_4l6o983', // テンプレートID
      formRef.current,    // フォーム要素
      'p6WifxsIrbjnSJdHX' // パブリックキー
    )
    .then((result) => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, (error) => {
      setStatus('error');
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-16">
      <div className="container-max w-full bg-white/95 rounded-2xl border-4 border-blue-200 py-16 px-4 md:px-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-blue-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input type="hidden" name="from_name" value={form.name} />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-blue-700 font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input type="hidden" name="from_message" value={form.message} />
          </div>
          <button
            type="submit"
            className="w-full btn-primary bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 rounded-lg shadow-lg transition-all duration-200"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <p className="text-green-600 text-center mt-4">Thank you! Your message has been sent.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-center mt-4">Failed to send. Please try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact; 