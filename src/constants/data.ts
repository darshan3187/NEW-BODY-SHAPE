import { Dumbbell, Flame, HeartPulse, Sparkles } from 'lucide-react'

export const programs = [
  {
    title: 'Weightlifting & Strength',
    detail: 'Build massive strength and muscle with our intensive weightlifting and power training programs.',
    icon: Dumbbell,
  },
  {
    title: 'Functional Cardio',
    detail: 'High-intensity cardio and interval training sessions to burn fat and boost metabolic health.',
    icon: HeartPulse,
  },
  {
    title: 'Specific Muscle Targeting',
    detail: 'Specialized isolation movements designed for targeted growth and aesthetic physique sculpting.',
    icon: Flame,
  },
  {
    title: 'Zumba & CrossFit',
    detail: 'High-energy group classes and functional cross-training to keep your fitness journey dynamic.',
    icon: Sparkles,
  },
]

export const trainers = [
  { name: 'Gaurang Vaghela', role: 'Head Trainer', image: '/trainers/gaurang.png' },
  { name: 'Parth Parmar', role: 'Strength Specialist', image: '/trainers/parth.png' },
  { name: 'Kalpesh Barot', role: 'Fitness Coach', image: '/trainers/kalpesh.png' },
]

export const plans = [
  {
    name: 'Starter',
    price: '₹1,499',
    period: '/month',
    features: ['Full Gym Access', 'Trainer Floor Support', 'Body Composition Tracking'],
  },
  {
    name: 'Performance',
    price: '₹3,999',
    period: '/3 months',
    featured: true,
    features: ['Cardio + Strength Programs', 'Diet Roadmap', 'Weekly Progress Review'],
  },
  {
    name: 'Elite Coaching',
    price: '₹6,999',
    period: '/3 months',
    features: ['Personal Coach', 'Custom Workout Split', 'Priority Time Slots'],
  },
]

export const locations = [
  {
    area: 'Nava Vadaj',
    desc: 'Best gym near Akhbar Nagar Circle. Strength & cardio training.',
  },
  {
    area: 'Ahmedabad Central',
    desc: 'Premium fitness hub for beginners and advanced lifters.',
  },
  {
    area: 'Personal Training',
    desc: 'One-on-one coaching for physique transformation.',
  },
]
