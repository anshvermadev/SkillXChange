export interface User {
  id: number;
  name: string;
  avatar: string;
  skillsOffered: string[];
  skillsWanted: string[];
  availability: string;
  rating: number;
  reviewCount: number;
}

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["React", "TypeScript", "UI/UX Design"],
    skillsWanted: ["Python", "Machine Learning"],
    availability: "Weekends",
    rating: 4.8,
    reviewCount: 24
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["Photography", "Video Editing", "Adobe Creative Suite"],
    skillsWanted: ["Web Development", "Digital Marketing"],
    availability: "Evenings",
    rating: 4.9,
    reviewCount: 31
  },
  {
    id: 3,
    name: "Emily Johnson",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["Piano", "Music Theory", "Guitar"],
    skillsWanted: ["Spanish", "Cooking"],
    availability: "Weekends",
    rating: 4.7,
    reviewCount: 18
  },
  {
    id: 4,
    name: "David Kim",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["Python", "Data Science", "Machine Learning"],
    skillsWanted: ["Frontend Development", "Public Speaking"],
    availability: "Weekdays",
    rating: 4.6,
    reviewCount: 22
  },
  {
    id: 5,
    name: "Isabella Martinez",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["Yoga", "Meditation", "Nutrition"],
    skillsWanted: ["Photography", "Graphic Design"],
    availability: "Evenings",
    rating: 4.9,
    reviewCount: 35
  },
  {
    id: 6,
    name: "Alexander Thompson",
    avatar: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["JavaScript", "Node.js", "AWS"],
    skillsWanted: ["Mobile Development", "DevOps"],
    availability: "Weekends",
    rating: 4.5,
    reviewCount: 19
  },
  {
    id: 7,
    name: "Sophia Williams",
    avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["French", "German", "Translation"],
    skillsWanted: ["Mandarin", "Japanese"],
    availability: "Weekdays",
    rating: 4.8,
    reviewCount: 27
  },
  {
    id: 8,
    name: "James Anderson",
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    skillsOffered: ["Woodworking", "Carpentry", "Home Repair"],
    skillsWanted: ["3D Printing", "Electronics"],
    availability: "Weekends",
    rating: 4.7,
    reviewCount: 16
  }
];