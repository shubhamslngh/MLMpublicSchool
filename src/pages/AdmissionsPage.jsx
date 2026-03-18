import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdmissionsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    message: ''
  });

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out the application form with student details'
    },
    {
      icon: Users,
      title: 'Interview',
      description: 'Meet with our admissions team and tour the campus'
    },
    {
      icon: CheckCircle,
      title: 'Document Verification',
      description: 'Submit required documents for verification'
    },
    {
      icon: Calendar,
      title: 'Enrollment',
      description: 'Complete enrollment process and secure your spot'
    }
  ];

  const grades = ['KG', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.studentName || !formData.grade || !formData.parentName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const newApplication = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    };
    applications.push(newApplication);
    localStorage.setItem('applications', JSON.stringify(applications));

    toast({
      title: "Success!",
      description: "Your application has been submitted successfully. We'll contact you soon.",
    });

    setFormData({
      studentName: '',
      grade: '',
      parentName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Admissions - MLM Public School</title>
        <meta name="description" content="Apply for admission to MLM Public School. Enrollment for grades KG to 8th. Start your application today!" />
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
                Admissions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-[#4f5a53] text-center max-w-3xl mx-auto leading-relaxed"
              >
                Clear admission steps, a simpler form, and a more grounded presentation.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-20 text-center"
            >
              <h2 className="text-4xl font-bold mb-8 text-[#17261f] font-playfair">
                Enrollment Information
              </h2>
              <p className="section-shell rounded-[2rem] p-8 text-lg leading-relaxed text-[#4f5a53]">
                We are accepting applications for grades KG through 8th for the 2026-2027 academic year. 
                Classes begin on <span className="font-semibold text-[#17261f]">February 28, 2026</span>. 
                Limited seats available - apply early to secure your spot!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24"
            >
              <h2 className="text-4xl font-bold text-center mb-16 text-[#17261f] font-playfair">
                Admission Process
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="section-shell relative overflow-hidden rounded-[1.75rem] p-8 group"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-5 text-6xl font-playfair font-bold text-[#17261f]">
                      {index + 1}
                    </div>
                    <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-[#f4f0e8] transition-transform group-hover:scale-105">
                      <step.icon className="h-6 w-6 text-[#17261f]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-center text-[#17261f] font-playfair">{step.title}</h3>
                    <p className="text-[#4f5a53] text-sm text-center leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-12 text-[#17261f] font-playfair">
                Application Form
              </h2>
              <form onSubmit={handleSubmit} className="section-shell rounded-[2rem] p-10">
                <div className="space-y-8">
                  <div>
                    <label htmlFor="studentName" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="grade" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                      Grade Applying For *
                    </label>
                    <select
                      id="grade"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                      required
                    >
                      <option value="">Select Grade</option>
                      {grades.map(grade => (
                        <option key={grade} value={grade}>{grade} Grade</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="parentName" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
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
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#17261f] mb-2 uppercase tracking-wide">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-4 text-gray-900 transition-all focus:border-transparent focus:ring-2 focus:ring-[#17261f]"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full rounded-full bg-[#17261f] py-6 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#31473c]"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AdmissionsPage;
