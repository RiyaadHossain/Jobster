export const notificationsData = [
  {
    from: {
      id: 1,
      role: "candidate",
      name: "Riyad Hossain",
    },
    to: {
      id: 1,
      name: "Kazi Zamil",
    },
    type: "message",
    createdAt: "",
  },
  {
    from: {
      id: 12,
      role: "candidate",
      name: "Jhon Doe",
    },
    to: {
      id: 75,
      name: "Kazi Zamil",
    },
    type: "apply",
    // 'job' Property for types - apply, application_accepted, application_rejected
    job: {
      id: 1001,
      title: "Frontend Developer",
    },
    createdAt: "",
  },
  {
    from: {
      id: 1,
      role: "company",
      name: "Nishat Fariza",
    },
    to: {
      id: 1,
      name: "Kazi Zamil",
    },
    type: "profile_view",
    createdAt: "",
  },
  {
    from: {
      id: 1,
      role: "candidate",
      name: "Programming Hero",
    },
    to: {
      id: 1,
      name: "Kazi Zamil",
    },
    type: "application_accepted",
    // 'job' Property for types - apply, application_accepted, application_rejected
    job: {
      id: 1002,
      title: "System Design Engineer",
    },
    createdAt: "",
  },
  {
    from: {
      id: 1,
      role: "candidate",
      name: "Organizen Ltd.",
    },
    to: {
      id: 1,
      name: "Kazi Zamil",
    },
    type: "application_rejected",
    // 'job' Property for types - apply, application_accepted, application_rejected
    job: {
      id: 1003,
      title: "Full stack Developer",
    },
    createdAt: "",
  },
];
