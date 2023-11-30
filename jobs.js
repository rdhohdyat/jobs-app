const data = [
  {
    id: 1,
    image: "tokopedia.png",
    title: "Web Developer",
    time: "Now",
    location: "Jakarta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Tokopedia",
  },
  {
    id: 2,
    image: "bukalapak.jpg",
    title: "UI/UX Designer",
    time: "Now",
    location: "Surabaya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Bukalapak",
  },
  {
    id: 3,
    image: "gojek.png",
    title: "Data Scientist",
    time: "Now",
    location: "Bandung",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Gojek",
  },
  {
    id: 4,
    image: "traveloka.png",
    title: "Data Analyst",
    time: "Now",
    location: "Yogyakarta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Traveloka",
  },
  {
    id: 5,
    image: "shopee.png",
    title: "Software Engineer",
    time: "Now",
    location: "Surabaya",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Shopee",
  },
  {
    id: 6,
    image: "lazada.png",
    title: "Marketing Manager",
    time: "Now",
    location: "Jakarta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Lazada",
  },
  {
    id: 7,
    image: "zalora.png",
    title: "Quality Assurance",
    time: "Now",
    location: "Bali",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Zalora",
  },
  {
    id: 8,
    image: "blibli.png",
    title: "Product Manager",
    time: "Now",
    location: "Medan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quidem.",
    company: "Blibli",
  },
];

const jobList = document.getElementById("jobList");

// Loop melalui data dan tambahkan elemen-elemen HTML ke dalam div
data.forEach((job) => {
  const jobDiv = document.createElement("div");
  jobDiv.classList.add(
    "group",
    "group/item",
    "border",
    "w-[250px]",
    "p-[20px]",
    "bg-white",
    "rounded-[10px]",
    "hover:bg-sky-500",
    "shadow-md",
    "shadow-grey-400/700",
    "hover:shadow-lg"
  );

  jobDiv.innerHTML = `
    <span class="flex justify-between items-center gap-4">
      <h1 class="text-[16px] font-semibold text-slate-500 group-hover:text-white ">${job.title}</h1>
      <span class="flex items-center text-[#ccc] gap-1">
        <i class='bx bx-time-five'></i>
        ${job.time}
      </span>
    </span>
    <h6 class="text-[#ccc]">${job.location}</h6>
    <p class="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
      ${job.desc}
    </p>
    <div class="Company flex items-center gap-2">
      <img src="img/${job.image}" alt="" class="w-[15%]">
      <span class="text-[14px] py-[1rem] block group-hover:text-white">${job.company}</span>
    </div>
    <button class="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-slate-600 hover:bg-white group-hover/item:text-slate-600">Apply Now</button>
  `;

  // Tambahkan elemen jobDiv ke dalam div jobList
  jobList.appendChild(jobDiv);
});

// Pastikan untuk menggantikan 'logo1', 'logo2', ..., 'logo8' dengan referensi yang sesuai untuk gambar logo Anda.
