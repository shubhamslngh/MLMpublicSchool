import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Sultanpur Ghosh, Khaga, Fatehpur · Uttar Pradesh'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 8004438000'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@mlmpublicschool.edu'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri: 8:00 AM - 4:00 PM'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
    const newInquiry = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    inquiries.push(newInquiry);
    localStorage.setItem('inquiries', JSON.stringify(inquiries));

    toast({
      title: "Success!",
      description: "Your message has been sent successfully. We'll get back to you soon!",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - MLM Public School</title>
        <meta name="description" content="Get in touch with MLM Public School in Sultanpur Ghosh, Khaga, Fatehpur. Visit us, call +91 8004438000, or send us a message." />
      </Helmet>

      <div className="min-h-screen">
        <section className="border-b border-black/5 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="section-shell rounded-[2rem] p-8 md:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold text-[#17261f] text-center mb-6 font-playfair"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#4f5a53] text-center max-w-3xl mx-auto leading-relaxed"
              >
                Reach the school directly or visit the campus in Sultanpur Ghosh.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="section-shell rounded-[1.75rem] p-8 text-center"
                >
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8]">
                    <info.icon className="h-6 w-6 text-[#17261f]" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-[#17261f] font-playfair">{info.title}</h3>
                  <p className="text-[#4f5a53] text-sm leading-relaxed">{info.details}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-10 text-[#17261f] font-playfair">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="section-shell rounded-[2rem] p-10">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                        required
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full rounded-full bg-[#17261f] py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#31473c]"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-10 text-[#17261f] font-playfair">
                  Visit Our Campus
                </h2>
                <div className="section-shell rounded-[2rem] p-10 mb-10">
                  <div className="mb-8 overflow-hidden rounded-[1.5rem]">
                    <img
                      src="/Front image of school with park.jpg"
                      alt="MLM Public School campus"
                      className="aspect-video w-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#17261f] font-playfair">MLM Public School</h3>
                  <p className="text-[#4f5a53] mb-6 text-lg">
                    Sultanpur Ghosh, Khaga, Fatehpur<br />
                    Uttar Pradesh
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="h-6 w-6 text-[#17261f]" />
                      <span className="text-lg font-medium">+91 8004438000</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Mail className="h-6 w-6 text-[#17261f]" />
                      <span className="text-lg font-medium">info@mlmpublicschool.edu</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Clock className="h-6 w-6 text-[#17261f]" />
                      <span className="text-lg font-medium">Mon-Fri: 8:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-black/10 bg-[#17261f] p-10 text-white">
                  <h3 className="text-2xl font-bold mb-4 font-playfair text-white">Schedule a Visit</h3>
                  <p className="mb-8 text-lg text-white/75">
                    Come see our facilities in Sultanpur Ghosh and meet our dedicated staff. We'd be happy to show you around!
                  </p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-white/20 bg-white/10 py-6 text-lg font-semibold text-white hover:bg-white hover:text-[#17261f]"
                  >
                    Book a Tour
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
