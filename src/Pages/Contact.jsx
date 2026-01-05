import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    e.target.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "support@foodshare.com",
      desc: "Response within 24 hours",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+880 175 5664564",
      desc: "Mon - Fri, 9am - 6pm",
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-900/20",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "Gulshan-2, Dhaka",
      desc: "Bangladesh, 1212",
      color: "text-rose-500",
      bg: "bg-rose-50 dark:bg-rose-900/20",
    },
  ];

  return (
    <div className="bg-base-100 min-h-screen transition-colors duration-500">
      <title>Contact | FoodShare</title>

      {/* Header Section */}
      <section className="py-20 text-center px-6 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-green-500/5 blur-[120px] rounded-full -z-10"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold tracking-widest uppercase mb-6">
          <MessageSquare size={14} /> Get in touch
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-base-content tracking-tight mb-6">
          How can we <span className="text-green-600">help you?</span>
        </h1>
        <p className="text-base-content/60 text-lg max-w-2xl mx-auto font-medium">
          Have questions about donating or claiming food? Our team is here to
          support you every step of the way.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Details Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-8 rounded-[2rem] bg-base-100 border border-base-200 dark:border-base-300/10 flex flex-col items-start hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 group"
              >
                <div
                  className={`p-4 rounded-2xl ${info.bg} ${info.color} mb-6 group-hover:scale-110 transition-transform`}
                >
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-base-content mb-1">
                  {info.title}
                </h3>
                <p className="text-base-content font-bold mb-2">{info.value}</p>
                <p className="text-base-content/50 text-sm font-medium">
                  {info.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-base-100 border border-base-200 dark:border-base-300/10 p-8 md:p-12 rounded-[3rem] shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70 px-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="input input-bordered bg-base-200/40 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl h-14"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70 px-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Eneter Your Email Address"
                      className="input input-bordered bg-base-200/40 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl h-14"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70 px-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="input input-bordered bg-base-200/40 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl h-14"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label text-xs font-bold uppercase tracking-wider text-base-content/70 px-1">
                    Message
                  </label>
                  <textarea
                    className="textarea textarea-bordered bg-base-200/40 border-base-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all rounded-xl h-40 pt-4"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-block bg-green-600 hover:bg-green-700 text-white border-none rounded-xl shadow-lg shadow-green-600/20 h-14 text-base font-bold group mt-4"
                >
                  Send Message
                  <Send
                    size={18}
                    className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
