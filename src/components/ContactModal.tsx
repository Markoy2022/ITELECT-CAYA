"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone, MapPin, GraduationCap, User } from "lucide-react";

interface ContactModalProps {
  trigger: React.ReactElement;
}

export function ContactModal({ trigger }: ContactModalProps) {
  const contactInfo = [
    {
      icon: <User className="w-5 h-5 text-[#BFC873]" />,
      label: "Name",
      value: "John Mark Caya",
    },
    {
      icon: <Phone className="w-5 h-5 text-[#BFC873]" />,
      label: "Phone",
      value: "09615251080",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#BFC873]" />,
      label: "Address",
      value: "Ibabao, Cordova, Cebu",
    },
    {
      icon: <Mail className="w-5 h-5 text-[#BFC873]" />,
      label: "Gmail",
      value: "johnmarkcaya222@gmail.com",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#BFC873]" />,
      label: "Education",
      value: "Cordova Public College - BSIT",
    },
  ];

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="sm:max-w-[425px] bg-[#E5E5E5] dark:bg-[#363737] border-black/10 dark:border-white/10 rounded-[2rem] p-8 shadow-2xl">
        <DialogHeader className="mb-6">
          <DialogTitle className="text-2xl font-bold tracking-tighter text-black dark:text-white uppercase text-center">
            Contact Information
          </DialogTitle>
          <div className="w-16 h-1 bg-[#BFC873] mx-auto rounded-full mt-2"></div>
        </DialogHeader>
        <div className="space-y-6 py-4">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-4 group transition-all">
              <div className="p-3 rounded-xl bg-white dark:bg-zinc-800 shadow-sm border border-black/5 dark:border-white/5 group-hover:bg-[#BFC873] group-hover:text-white transition-all duration-300">
                {info.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  {info.label}
                </span>
                <span className="text-sm font-bold text-black dark:text-white tracking-tight">
                  {info.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
