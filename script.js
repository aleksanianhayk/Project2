let dropZone = document.getElementById('dropZone');
let filePreview = document.getElementById('filePreview');

dropZone.addEventListener('dragover', function (e) {
    e.preventDefault();
    dropZone.classList.add('highlight');
});

dropZone.addEventListener('dragleave', function (e) {
    e.preventDefault();
    dropZone.classList.remove('highlight');
});

dropZone.addEventListener('drop', function (e) {
    e.preventDefault();
    dropZone.classList.remove('highlight');

    let files = e.dataTransfer.files;
    showFilePreview(files);
});

dropZone.addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function () {
    let files = this.files;
    showFilePreview(files);
});

function ChangeDropzoneContent() {
    document.getElementById("dropzone-text").innerHTML = "File Attached"
    document.getElementById("dropzone-icon").classList.replace("bi-cloud-upload", "bi-cloud-check")
}

function showFilePreview(files) {
    filePreview.innerHTML = '';
    document.getElementById("dropzone-text").innerHTML = "Drag and drop files here or click to browse"
    document.getElementById("dropzone-icon").classList.replace("bi-cloud-check", "bi-cloud-upload")
    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let fileItem = document.createElement('div');
        fileItem.textContent = file.name;
        filePreview.appendChild(fileItem);
        document.getElementById("dropzone-text").innerHTML = "File Attached"
        document.getElementById("dropzone-icon").classList.replace("bi-cloud-upload", "bi-cloud-check")


        if (files.length === 0) {
            filePreview.innerHTML = 'No files selected.';
        }
    }
}

document.getElementById('formCourseFree').addEventListener('change', function () {
    if (document.getElementById('formCourseFree').checked) {
        document.getElementById("formCourseCost").setAttribute("disabled", "");
        document.getElementById("formCourseCost").value = "0";
    } else {
        document.getElementById("formCourseCost").removeAttribute("disabled");
    }
})

var likeIcon = document.getElementById('like-button-icon');
var isLiked = false;

function toggleLike() {
    if (!isLiked) {
        likeIcon.classList.replace("bi-hand-thumbs-up", "bi-hand-thumbs-up-fill");
    } else {

        likeIcon.classList.replace("bi-hand-thumbs-up-fill", "bi-hand-thumbs-up");
    }
    isLiked = !isLiked;
}
document.getElementById("ConnectWalletButton").onclick = function () {
    this.style.display = "none"
    document.getElementById("UploadCourseButton").style.display = "block";
    document.getElementById("UploadCourseButton").removeAttribute("disabled")

}

var copyIcon = document.getElementById('copy-button-icon');
var copyP = document.getElementById("like-copy-p")

function copyLink() {
    copyIcon.classList.replace("bi-link-45deg", "bi-check2");
    copyP.innerHTML = "Copied"
    navigator.clipboard.writeText(window.location.href)
    setTimeout(function () {
        copyIcon.classList.replace("bi-check2", "bi-link-45deg");
        copyP.innerHTML = "Copy"
    }, 3000)
}
let addCommentInp = document.getElementById("add-comment-input")



document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.dropdown-menu').forEach(function (element) {
        element.addEventListener('click', function (e) {
            e.stopPropagation();

        });
    })
    document.querySelectorAll('.dropdown-item').forEach(function (element) {
        element.addEventListener('click', function (e) {
            if (element.lastChild.classList.contains("bi-caret-right-fill")) {
                element.lastChild.classList.replace("bi-caret-right-fill", "bi-caret-up-fill")
            } else {
                element.lastChild.classList.replace("bi-caret-up-fill", "bi-caret-right-fill")

            }
        });
    })

    if (window.innerWidth < 993) {

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {

                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }

});

function CreateCategory(CategoryInd) {
    let li = document.createElement("li")


    let a = document.createElement("a")
    a.href = ""
    a.classList.add("dropdown-item")
    a.innerText = db[CategoryInd].name;
    let icon = document.createElement("i")
    icon.classList.add("bi", "bi-caret-right-fill", "ml-2")
    a.appendChild(icon)
    li.appendChild(a);
    let ul1 = document.createElement("ul")
    ul1.classList.add("dropdown-menu", "submenu")

    Object.keys(db[CategoryInd].elements).forEach(element => {

        let li1 = document.createElement("li")
        let a1 = document.createElement("a")
        a1.href = ""
        a1.classList.add("dropdown-item")
        a1.innerText = element
        let icon = document.createElement("i")
        icon.classList.add("bi", "bi-caret-right-fill", "ml-2")
        a1.appendChild(icon)
        li1.appendChild(a1)
        let ul2 = document.createElement("ul")
        ul2.classList.add("dropdown-menu", "submenu", "multi-menu")

        db[CategoryInd].elements[element].forEach(subelement => {
            let li2 = document.createElement("li")
            let a2 = document.createElement("a")
            a2.href = ""
            a2.classList.add("dropdown-item")
            a2.innerText = subelement
            icon.classList.add("bi", "bi-caret-right-fill", "ml-2")
            a1.appendChild(icon)

            li2.appendChild(a2)
            ul2.appendChild(li2)
        })

        li1.appendChild(ul2)
        ul1.appendChild(li1)
        li.appendChild(ul1)
        document.getElementById("categories-dropdown").appendChild(li)

    });
}
let db = {

    0: {
        name: "Development",
        elements: {
            "Web Development": ["Life Coach Training", "Personal Development", "Neuro-Linguistic Programming", "Sound Therapy", "Mindfulness", "Life Purpose", "Communication Skills", "Counseling"],

            "Data Science": ["Python", "Machine Learning", "ChatGPT", "Artificial Intelligence", "Deep Learning", "Natural Language ", "Data Analysis", "R (programming language)"],

            "Mobile Development": ["Google Flutter", "Android Development", "iOS Development", "React Native", "Dart (programming", "Swift", "SwiftUl", "Kotlin"],

            "Programming Languages": ["Python", "Java", "C#", "React JS", "C++", "JavaScript", "C (programming language)", "Spring Framework", "Object Oriented Programming"],

            "Game Development": ["Unity", "Unreal Engine", "Game Development Fundamentals", "C#", "3D Game Development", "C++", "2D Game Development", "Godot", "Unreal Engine Blueprints"],

            "Database Design & Development": ["SaL", "MySOL", "Database Management", "MongoDB", "SQL Server", "Apache Kafka", "PostgreSQL", "Oracle SOL", "Database Programming"],

            "Software Testing": ["SaL", "MySOL", "Database Management", "MongoDB", "SQL Server", "Apache Kafka", "PostgreSQL", "Oracle SOL", "Database Programming"],

            "Software Engineering": ["Data Structures", "Coding Interview", "Algorithms", "Software Architecture", "Certified Kubernetes Application", "Developer (CKAD)", "Microservices", "Software Practices", "Spring Framework", "Back End Web Development"],
            "Software Development Tools": ["Docker", "Git", "Kubernetes", "JIRA", "GitHub", "Confluence", "DevOps", "ChatGPT", "Jenkins"],
            "No-Code Development": ["WordPress", "Bubble Visual Programming", "Microsoft Power Platform", "Web Design", "Elementor", "Pega", "ChatGPT", "Wix", "Web Development"],
        }
    },
    1: {
        name: "Business",
        elements: {
            "Entrepreneurship": ["Business Fundamentals", "Entrepreneurship Fundamentals", "Freelancing", "ChatGPT", "Business Strategy", "Startup", "Online Business", "Business Plan", "Blogging"],
            "Communication": ["Communication Skills", "Presentation Skills", "Public Speaking", "Writing", "Fiction Writing", "Business Communication", "Email Writing and Etiquette", "Business Writing", "Assertiveness"],
            "Management": ["Product Management", "Leadership", "Management Skills", "ISO 9001", "Business Strategy", "Project Management", "Manager Training", "Quality Management", "ISO/IEC 27001"],
            "Sales": ["Sales Skills", "B2B Sales", "Linkedin", "Customer Service", "Lead Generation", "Etsy", "Print On Demand", "Cold Email", "Customer Success Management"],
            "Business Strategy": ["Digital Marketing", "ChatGPT", "Management Consulting", "TOGAF 9 Foundation", "ESG (Environmental, Social and Governance)", "Business Development", "TOGAF 9 Certified", "Digital Transformation"],
            "Operations": ["Six Sigma Green Belt", "Six Sigma", "Supply Chain", "Six Sigma Black Belt", "Logistics Management", "Six Sigma Yellow Belt", "Virtual Assistant", "Quality Management", "Lean Six Sigma Yellow Belt"],
            "Project Management": ["PMP", "PMI PMBOK", "CAPM Certified Associate in Project", "Management", "Scrum", "Agile", "Professional Scrum Master (PSM)", "Product Owner", "PMI-ACP"],
            "Business Law": ["Law", "Contract Management", "GDPR", "Legal English", "Contract Law", "Healthcare IT", "Data Protection", "Legal Research"],
            "Business Analytics & Intelligence": ["Microsoft Power BI", "SOL", "Data Modeling", "Business Analysis", "Tableau", "Data Analysis", "Data Warehouse", "_DAX", "Data Visualization"],
            "Human Resources": ["Recruiting", "HR Analytics", "Hiring", "SHRM Certified Professional", "(SHRM-CP)", "Corporate Learning and", "Development (L&D)", "Employment Law", "Instructional Design", "Diversity and Inclusion"],
            "Industry": ["Piping", "Oil and Gas Industry", "Chemical Engineering", "Aviation", "Solar Energy", "Workplace Health and Safety", "Medical Device Development", "EPLAN Electric P8", "Electrical Engineering"],
            "E-Commerce": ["Amazon FBA", "ChatGPT", "Dropshipping", "Shopify Dropshipping", "Shopify", "Etsy", "Selling on Amazon", "Online Business"],
            "Media": ["Audiobook Creation", "Amazon Kindle Direct Publishing", "(KDP)", "Content Creation", "YouTube Audience Growth", "Journalism", "Screenwriting and Scriptwriting", "Podcasting", "Writing", "Online Course Creation"],
            "Real Estate": ["Real Estate Investing", "Airbnb Hosting", "Notary Business", "Financial Modeling", "Construction", "Real Estate Marketing", "Mortgage", "Real Estate Flipping"],
        }
    },
    2: {
        name: "Finance & Accounting",
        elements: {
            "Accounting & Bookkeeping": ["Real Estate Investing", "Airbnb Hosting", "Notary Business", "Financial Modeling", "Construction", "Real Estate Marketing", "Mortgage", "Accounting", "Bookkeeping", "Financial Accounting", "Finance Fundamentals", "QuickBooks Online", "TallyPrime (Tally.ERP)", "Uniform CPA Examination", "SAP FICO"],
            "Compliance ": ["Anti-Money Laundering", "Criminology", "Fraud Analytics", "Sarbanes-Oxley (SOX)", "Risk Management", "Internal Controls", "Internal Auditing", "Trade and Commerce", "IFRS"],
            "Cryptocurrency & Blockchain ": ["Cryptocurrency", "Blockchain", "Binance", "Bitcoin", "NFT (Non-Fungible Tokens)", "Day Trading", "Metaverse", "Online Arbitrage", "Algorithmic Trading"],
            "Economics ": ["Macroeconomics", "Microeconomics", "Stata", "Global Economics", "Finance Fundamentals", "Econometrics", "Accounting", "Behavioral Economics"],
            "Finance ": ["Personal Finance", "Investment Banking", "Finance Fundamentals", "CFA Chartered Financial Analyst", "Banking", "Financial Management", "Corporate Finance", "Financial Analysis", "Accounting"],
            "Finance Cert & Exam Prep ": ["CFA Chartered Financial Analyst", "ACCA", "Certified Management Accountant", "(CMA)", "Financial Management", "ANBIMA Certification", "Certified Internal Auditor (CIA)", "Internal Auditing", "Quantitative Finance", "Financial Markets"],
            "Financial Modeling & Analysis ": ["Financial Analysis", "Financial Modeling", "Excel", "Finance Fundamentals", "Investment Banking", "Accounting", "Financial Accounting", "Company Valuation", "Python"],
            "Investing & Trading ": ["Stock Trading", "Investing", "Forex Trading", "Algorithmic Trading", "Technical Analysis (finance)", "Day Trading", "Options Trading", "Financial Markets", "Financial Trading"],
            "Money Management Tools ": ["QuickBooks Online", "QuickBooks", "SAP FICO", "Xero", "Excel", "QuickBooks Pro", "Excel Analytics", "Financial Modeling", "Credit Repair"],
            "Taxes ": ["Tax Preparation", "Goods and Services Tax", "Accounting", "Value Added Tax (VAT)", "Transfer Pricing", "Financial Accounting", "Home Business", "Law", "Corporate Finance"],
        }
    },
    3: {
        name: "IT & Software",
        elements: {
            "IT Certifications ": [" "],
            "Network & Security ": [""],
            "Hardware ": [""],
            "Operating Systems & Servers ": [""],
            "Other IT & Software ": [""]
        }
    },
    4: {
        name: "Office Productivity",
        elements: {
            "Microsoft": [""],
            "Apple": [""],
            "Google": [""],
            "SAP": [""],
            "Oracle": [""],
            "Other Office Productivity": [""]
        }
    },
    5: {
        name: "Personal Development",
        elements: {
            "Personal Transformation": [""],
            "Personal Productivity": [""],
            "Leadership": [""],
            "Career Development": [""],
            "Parenting & Relationships": [""],
            "Happiness": [""],
            "Esoteric Practices": [""],
            "Religion & Spirituality": [""],
            "Personal Brand Building": [""],
            "Creativity": [""],
            "Influence": [""],
            "Self Esteem & Confidence": [""],
            "Stress Management": [""],
            "Memory & Study Skills": [""],
            "Motivation": [""],
            "Other Personal Development": [""]
        }
    },
    6: {
        name: "Design",
        elements: {
            "Personal Transformation": [""],
            "Personal Productivity": [""],
            "Leadership": [""],
            "Career Development": [""],
            "Parenting & Relationships": [""],
            "Happiness": [""],
            "Esoteric Practices": [""],
            "Religion & Spirituality": [""],
            "Personal Brand Building": [""],
            "Creativity": [""],
            "Influence": [""],
            "Self Esteem & Confidence": [""],
            "Stress Management": [""],
            "Memory & Study Skills": [""],
            "Motivation": [""],
            "Other Personal Development": [""]
        }
    },
    7: {
        name: "Marketing",
        elements: {
            "Digital Marketing": [""],
            "Search Engine Optimization": [""],
            "Social Media Marketing": [""],
            "Branding": [""],
            "Marketing Fundamentals": [""],
            "Marketing Analytics &": [""],
            "Automation": [""],
            "Public Relations": [""],
            "Paid Advertising": [""],
            "Video & Mobile Marketing": [""],
            "Content Marketing": [""],
            "Growth Hacking": [""],
            "Affiliate Marketing": [""],
            "Product Marketing": [""],
            "Other Marketing": [""]
        }
    },
    8: {
        name: "Lifestyle",
        elements: {
            "Arts & Crafts": [""],
            "Beauty & Makeup": [""],
            "Esoteric Practices": [""],
            "Food & Beverage": [""],
            "Gaming": [""],
            "Home Improvement &": [""],
            "Gardening": [""],
            "Pet Care & Training": [""],
            "Travel": [""],
            "Other Lifestyle": [""]
        }
    },
    9: {
        name: "Photography & Video",
        elements: {
            "Digital Photography": [""],
            "Photography": [""],
            "Portrait Photography": [""],
            "Photography Tools": [""],
            "Commercial Photography": [""],
            "Video Design": [""],
            "Other Photography & Video": [""]
        }
    },
    10: {
        name: "Health & Fitness",
        elements: {
            "Fitness": [""],
            "General Health": [""],
            "Sports": [""],
            "Nutrition & Diet": [""],
            "Yoga": [""],
            "Mental Health": [""],
            "Martial Arts & Self Defense": [""],
            "Safety & First Aid": [""],
            "Dance": [""],
            "Meditation": [""],
            "Other Health & Fitness": [""]
        }
    },
    11: {
        name: "Music",
        elements: {
            "Instruments": [""],
            "Music Production": [""],
            "Music Fundamentals": [""],
            "Vocal": [""],
            "Music Techniques": [""],
            "Music Software": [""],
            "Other Music": [""]
        }
    },
    12: {
        name: "Teaching & Academics",
        elements: {
            "Engineering": [""],
            "Humanities": [""],
            "Math": [""],
            "Science": [""],
            "Online Education": [""],
            "Social Science": [""],
            "Language Learning": [""],
            "Teacher Training": [""],
            "Test Prep": [""],
            "Other Teaching & Academics": [""]
        }
    }
}
Object.keys(db).forEach(element => {
    CreateCategory(element)

})