// دمج بيانات المساقات
const courses = {
    biology: { 
        title: "الأحياء", 
        icon: "fa-dna", 
        code: "BIOL 101",
        books: [
            { name: "كتاب الأحياء - د. أيمن أبو مصطفى 2024", link: "https://www.mediafire.com/file/8oddlw5fw751nd2/Biology+Dr.+Ayman+Abu+Mustafa+2024.pdf/file", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1 - الجزء الأول", link: "https://www.youtube.com/watch?v=8COAdAXo6mo", type: "youtube" },
            { name: "محاضرة 1 - الجزء الثاني", link: "https://www.youtube.com/watch?v=-EcD5MBMoiM", type: "youtube" },
            { name: "محاضرة 2 - الجزء الأول", link: "https://www.youtube.com/watch?v=gZG1I2mVBFI", type: "youtube" },
            { name: "محاضرة 2 - الجزء الثاني", link: "https://www.youtube.com/watch?v=gZG1I2mVBFI", type: "youtube" }
        ]},
    chemistry: { 
        title: "الكيمياء", 
        icon: "fa-flask", 
        code: "CHEM 101",
        books: [
            { name: "كتاب الكيمياء", link: "https://drive.google.com/file/d/16NwS8HV1UizqrMnKnAAIOhth_6STxxff/view?usp=drivesdk", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=QEBq2ujVl9k", type: "youtube" },
            { name: "محاضرة 2 - الجزء الأول", link: "https://drive.google.com/file/d/1mYbo3lYhfrgPPNBlbPWvGVKbNDS4DPNS/view", type: "drive" },
            { name: "محاضرة 2 - الجزء الثاني", link: "https://drive.google.com/file/d/1xUd0aEy4mXPDkghZmZvjSW6wUCW-WFkv/view", type: "drive" }
        ]},
    physics: { 
        title: "مقدمة التمريض", 
        icon: "fa-atom", 
        code: "PHYS 101",
        books: [
            { name: "كتاب مقدمة التمريض", link: "https://drive.google.com/file/d/1MvpccHOlHV3XcPUrtB7uXDoKFdB5MlSr/view?usp=sharing", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=apf3Jagp1ak&list=PLftkcFPCNYd1Fvio2pIx20w8I-z4Lp0YF&index=10", type: "youtube" },
            { name: "محاضرة 2", link: "https://www.youtube.com/watch?v=QnK68q-yeGQ&list=PLftkcFPCNYd1Fvio2pIx20w8I-z4Lp0YF&index=9", type: "youtube" }
        ]},
    anatomy: { 
        title: "القضية الفلسطينية", 
        icon: "fa-brain", 
        code: "ANAT 101",
        books: [
            { name: "كتاب القضية الفلسطينية", link: "https://drive.google.com/file/d/1HOyQGAJut0J7DGQTGTwoA_4l5qxRAshs/view?usp=drivesdk", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=2KXiwod-doc", type: "youtube" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/14W1ToppqX7YtAv4N2_USjBHGbphMsuY-/view", type: "drive" }
        ]},
    physiology: { 
        title: "العقيدة الإسلامية", 
        icon: "fa-heartbeat", 
        code: "PHYL 101",
        books: [
            { name: "كتاب العقيدة الإسلامية", link: "https://drive.google.com/file/d/1Dp31f1IO5W7-3n5_08OnUCY1CRJe8giz/view?usp=sharing", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://drive.google.com/file/d/1-0LcO1NKGpS24Wsxh2HlOrbm2h8x0J9l/view", type: "drive" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/1TQwAck0RKeO7SVVf_gmCvpyAe8lamqBI/view", type: "drive" }
        ]},
    biochemistry: { 
        title: "اللغة العربية", 
        icon: "fa-dna", 
        code: "BCHM 101",
        books: [
            { name: "كتاب اللغة العربية", link: "https://drive.google.com/file/d/1rFw8PreTixsl7om5OYdSblZR9fSdznrU/view?usp=drive_link", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://drive.google.com/file/d/1hTV61Wi_QhsgvNS4053kyuCQiIJ8mrWS/view", type: "drive" },
            { name: "محاضرة 2", link: "https://drive.google.com/file/d/1svLca-O5m-Jp-Kvlf37kVsqfRcBRlBCS/view", type: "drive" }
        ]},
    med_terms: { 
        title: "مصطلحات طبية", 
        icon: "fa-language", 
        code: "MEDT 101",
        books: [
            { name: "المصطلحات الطبية - د. أيمن أبو مصطفى 2024", link: "https://www.mediafire.com/file/89jqd8vy6kx9t5r/Medical+Terminology+++2024+-+Dr.+Ayman+Abu+Mustafa+Students+lectures.pdf/file", year: "2024" }
        ],
        lectures: [
            { name: "محاضرة 1", link: "https://www.youtube.com/watch?v=5GJgok2w0jI", type: "youtube" },
            { name: "محاضرة 2", link: "https://www.youtube.com/watch?v=R1477sBA7vw", type: "youtube" }
        ]},
    
    nursing_practical: { 
        title: "تمريض عملي", 
        icon: "fa-hospital-user", 
        code: "NURS 102",
        books: [
            { name: "دليل التمريض العملي", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    nursing1: { 
        title: "أساسيات التمريض", 
        icon: "fa-stethoscope", 
        code: "NURS 101",
        books: [
            { name: "كتاب أساسيات التمريض", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    safety: { 
        title: "السلامة", 
        icon: "fa-shield-halved", 
        code: "SAFE 101",
        books: [
            { name: "دليل السلامة المهنية", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    microbio: { 
        title: "أحياء دقيقة", 
        icon: "fa-bacteria", 
        code: "MICR 101",
        books: [
            { name: "كتاب الأحياء الدقيقة", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    biochem2: { 
        title: "كيمياء حيوية طبية", 
        icon: "fa-vial", 
        code: "BCHM 102",
        books: [
            { name: "كتاب الكيمياء الحيوية الطبية", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    quran: { 
        title: "القران الكريم", 
        icon: "fa-book-quran", 
        code: "QURN 101",
        books: [
            { name: "تفسير القرآن الكريم", link: "#", year: "2024", coming: true }
        ],
        lectures: []},
    anatomy2: { 
        title: "التشريح 2", 
        icon: "fa-bone", 
        code: "ANAT 102",
        books: [
            { name: "كتاب التشريح المتقدم", link: "#", year: "2024", coming: true }
        ],
        lectures: []}
};

// إضافة CSS للثيمات المريحة وتصغير الايقونات
const style = document.createElement('style');
style.textContent = `
    /* ثيم أساسي - أزرق مريح */
    :root {
        --primary-color: #4A90E2;
        --primary-dark: #357ABD;
        --primary-light: #6BA5E8;
        --accent-color: #50C878;
        --bg-gradient-start: #E8F0FE;
        --bg-gradient-end: #D1E2FC;
        --card-bg: rgba(255, 255, 255, 0.95);
        --text-color: #2C3E50;
        --text-light: #5D6D7E;
        --border-color: #BDC9D6;
        --shadow-color: rgba(74, 144, 226, 0.2);
        --hover-bg: #F0F7FF;
    }
    
    body {
        background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
        color: var(--text-color);
        font-family: 'Cairo', sans-serif;
        margin: 0;
        padding: 20px;
        min-height: 100vh;
        transition: all 0.3s ease;
    }
    
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    /* تصغير الايقونات وجعلها responsive */
    .card i {
        font-size: clamp(1.2rem, 4vw, 1.8rem) !important;
        color: var(--primary-color);
        margin-bottom: 10px;
        transition: all 0.3s ease;
    }
    
    .card:hover i {
        transform: scale(1.1);
        color: var(--primary-dark);
    }
    
    .book-button i {
        font-size: clamp(1rem, 3vw, 1.3rem) !important;
        margin-left: 10px;
        color: var(--primary-color);
    }
    
    .section-title i {
        font-size: clamp(1.1rem, 3.5vw, 1.5rem) !important;
        color: var(--primary-color);
    }
    
    .content-info i {
        font-size: clamp(1.1rem, 3.5vw, 1.5rem) !important;
    }
    
    .tab i {
        font-size: clamp(0.9rem, 2.5vw, 1.1rem) !important;
        margin-left: 5px;
    }
    
    .click-here i {
        font-size: 0.9rem !important;
        margin-left: 3px;
    }
    
    .page-title i {
        font-size: clamp(1.5rem, 5vw, 2rem) !important;
        color: var(--primary-color);
        animation: gentlePulse 3s infinite;
    }
    
    @keyframes gentlePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    /* تنسيق البطاقات */
    .card {
        background: var(--card-bg);
        border-radius: 20px;
        padding: 20px;
        text-align: center;
        box-shadow: 0 8px 20px var(--shadow-color);
        transition: all 0.3s ease;
        cursor: pointer;
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px var(--shadow-color);
        background: var(--hover-bg);
    }
    
    .card h3 {
        color: var(--text-color);
        margin-bottom: 10px;
        font-size: clamp(1rem, 3.5vw, 1.2rem);
        font-weight: 600;
    }
    
    /* تنسيق التبويبات */
    .tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 25px;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .tab {
        background: var(--card-bg);
        padding: 10px 20px;
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 600;
        border: 1px solid var(--border-color);
        color: var(--text-color);
        font-size: clamp(0.9rem, 3vw, 1rem);
        backdrop-filter: blur(5px);
    }
    
    .tab.active {
        background: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
        box-shadow: 0 4px 12px var(--shadow-color);
    }
    
    .tab.active i {
        color: white !important;
    }
    
    .tab:hover {
        background: var(--primary-light);
        color: white;
        border-color: var(--primary-light);
    }
    
    .tab:hover i {
        color: white !important;
    }
    
    /* تنسيق أزرار الكتب */
    .book-button {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        background: var(--card-bg);
        border-radius: 15px;
        margin-bottom: 12px;
        text-decoration: none;
        color: var(--text-color);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        font-size: clamp(0.9rem, 3vw, 1rem);
        backdrop-filter: blur(5px);
    }
    
    .book-button:hover {
        background: var(--hover-bg);
        transform: translateX(-5px);
        box-shadow: 0 8px 20px var(--shadow-color);
        border-color: var(--primary-light);
    }
    
    .click-here {
        margin-right: auto;
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)) !important;
        color: white !important;
        padding: 6px 15px;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(74, 144, 226, 0.3);
    }
    
    .click-here i {
        color: white !important;
    }
    
    /* تنسيق الصفحة الرئيسية */
    .page-title {
        text-align: center;
        color: var(--text-color);
        margin-bottom: 30px;
        font-size: clamp(1.5rem, 5vw, 2.5rem);
        text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5);
    }
    
    .code {
        display: inline-block;
        background: rgba(74, 144, 226, 0.1);
        padding: 5px 15px;
        border-radius: 25px;
        font-size: 0.9rem;
        color: var(--primary-color);
        border: 1px solid rgba(74, 144, 226, 0.2);
    }
    
    /* تنسيق أزرار الرجوع */
    .back-button {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 30px;
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 20px;
        transition: all 0.3s ease;
        font-weight: 600;
        box-shadow: 0 4px 12px var(--shadow-color);
    }
    
    .back-button:hover {
        transform: translateX(-5px);
        box-shadow: 0 8px 20px var(--shadow-color);
    }
    
    .back-button i {
        font-size: 0.9rem !important;
        margin-left: 5px;
    }
    
    /* تنسيق محتوى التبويبات */
    .books-section {
        background: var(--card-bg);
        border-radius: 25px;
        padding: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
    }
    
    .section-title {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;
        color: var(--text-color);
        font-size: clamp(1.1rem, 3.5vw, 1.3rem);
        border-bottom: 2px solid rgba(74, 144, 226, 0.2);
        padding-bottom: 12px;
    }
    
    .content-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 15px;
        margin-bottom: 12px;
        border: 1px solid rgba(74, 144, 226, 0.1);
        transition: all 0.3s ease;
    }
    
    .content-card:hover {
        background: white;
        box-shadow: 0 5px 15px rgba(74, 144, 226, 0.1);
    }
    
    .content-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .content-info h4 {
        font-size: clamp(0.9rem, 3vw, 1rem);
        color: var(--text-color);
        margin: 0;
    }
    
    .download-btn {
        background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
        color: white;
        padding: 8px 18px;
        border-radius: 25px;
        text-decoration: none;
        font-size: 0.9rem;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
    }
    
    .download-btn:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px var(--shadow-color);
    }
    
    .download-btn i {
        font-size: 0.8rem !important;
        margin-left: 5px;
        color: white !important;
    }
    
    /* تنسيق الشبكة */
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    /* تنسيق روابط يوتيوب وجوجل درايف */
    .fab.fa-youtube {
        color: #FF0000 !important;
        filter: drop-shadow(0 2px 4px rgba(255, 0, 0, 0.2));
    }
    
    .fab.fa-google-drive {
        color: #34A853 !important;
        filter: drop-shadow(0 2px 4px rgba(52, 168, 83, 0.2));
    }
    
    /* تنسيق شريط البحث */
    .search-container {
        margin-bottom: 25px;
    }
    
    .search-input {
        width: 100%;
        padding: 15px 25px;
        border-radius: 40px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        background: var(--card-bg);
        color: var(--text-color);
        font-size: 1rem;
        outline: none;
        transition: all 0.3s ease;
        backdrop-filter: blur(5px);
    }
    
    .search-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 4px var(--shadow-color);
    }
    
    .search-input::placeholder {
        color: var(--text-light);
    }
    
    /* تنسيق للشاشات الصغيرة */
    @media (max-width: 768px) {
        body {
            padding: 10px;
        }
        
        .grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .tabs {
            flex-direction: column;
        }
        
        .tab {
            text-align: center;
            width: 100%;
        }
        
        .book-button {
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .click-here {
            width: 100%;
            text-align: center;
            margin-right: 0;
        }
    }
    
    /* تنسيق للشاشات المتوسطة */
    @media (min-width: 769px) and (max-width: 1024px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;

document.head.appendChild(style);

function animatePage(html) {
    document.getElementById("main").innerHTML = html;
}

function showDashboard() {
    animatePage(`
        <h1 class="page-title">
            <i class="fas fa-crown"></i>
            جامعة الاقصى
            <i class="fas fa-crown"></i>
        </h1>

        <div class="card" style="margin-bottom: 20px;">
            <i class="fas fa-user-nurse"></i>
            <h2>تمريض - سنة أولى</h2>
        </div>

        <div class="grid">
            <div class="card" onclick="openSemester(1)">
                <i class="fas fa-calendar-alt"></i>
                <h3>الفصل الأول</h3>
                <span class="code">7 مساقات</span>
            </div>

            <div class="card" onclick="openSemester(2)">
                <i class="fas fa-calendar-check"></i>
                <h3>الفصل الثاني</h3>
                <span class="code">7 مساقات</span>
            </div>
        </div>
    `);
}

function openSemester(sem) {
    const list = sem === 1 ? 
        ["biology", "chemistry", "physics", "anatomy", "physiology", "biochemistry", "med_terms"] :
        ["nursing_practical", "nursing1", "safety", "microbio", "biochem2", "quran", "anatomy2"];

    let html = `
        <button class="back-button" onclick="showDashboard()">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </button>
        <h2 class="course-title">
            الفصل ${sem === 1 ? "الأول" : "الثاني"}
        </h2>
        <div class="grid">
    `;

    list.forEach(key => {
        html += `
            <div class="card" onclick="openCourse('${key}')">
                <i class="fas ${courses[key].icon}"></i>
                <h3>${courses[key].title}</h3>
                <span class="code">${courses[key].code}</span>
            </div>
        `;
    });

    html += "</div>";
    animatePage(html);
}

function openCourse(key) {
    const course = courses[key];
    
    let html = `
        <button class="back-button" onclick="showDashboard()">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </button>
        
        <h2 class="course-title">
            <i class="fas ${course.icon}"></i>
            ${course.title}
        </h2>

        <div class="tabs">
            <div class="tab active" onclick="switchTab(this, '${key}', 'books')">
                <i class="fas fa-book"></i> كتب
            </div>
            <div class="tab" onclick="switchTab(this, '${key}', 'summaries')">
                <i class="fas fa-file-alt"></i> ملخصات
            </div>
            <div class="tab" onclick="switchTab(this, '${key}', 'exams')">
                <i class="fas fa-question-circle"></i> اختبارات
            </div>
            <div class="tab" onclick="switchTab(this, '${key}', 'lectures')">
                <i class="fas fa-video"></i> محاضرات
            </div>
        </div>

        <div id="tabContent" class="tab-content"></div>
    `;

    animatePage(html);
    loadTabContent(key, 'books');
}

function switchTab(el, courseKey, type) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    el.classList.add("active");
    loadTabContent(courseKey, type);
}

function loadTabContent(courseKey, type) {
    const course = courses[courseKey];
    let html = '';

    if (type === 'books') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-book"></i>
                    <span>الكتب الدراسية</span>
                </div>
        `;

        course.books.forEach(book => {
            if (book.coming) {
                html += `
                    <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-clock"></i>
                            قريباً
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-book-open"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer"></i>
                            تحميل
                        </div>
                    </a>
                `;
            }
        });

        html += `</div>`;
    } 
    else if (type === 'lectures') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-video"></i>
                    <span>المحاضرات المسجلة</span>
                </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fab ${icon}" style="color: ${lecture.type === 'youtube' ? '#FF0000' : '#34A853'};"></i>
                        <span>${lecture.name}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer"></i>
                            مشاهدة
                        </div>
                    </a>
                `;
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas fa-video-slash" style="font-size: 2rem; color: #95a5a6;"></i>
                        <h4 style="color: #7f8c8d;">لا توجد محاضرات متاحة حالياً</h4>
                    </div>
                </div>
            `;
        }

        html += `</div>`;
    }
    else {
        const items = {
            summaries: [
                { name: "ملخص الوحدة الأولى", file: "#" },
                { name: "ملخص الوحدة الثانية", file: "#" },
                { name: "ملخص الوحدة الثالثة", file: "#" }
            ],
            exams: [
                { name: "اختبار قصير 1", file: "#" },
                { name: "اختبار منتصف الفصل", file: "#" },
                { name: "اختبار نهائي", file: "#" }
            ]
        }[type] || [];

        html = '<div class="books-section">';
        html += `<div class="section-title">
                    <i class="fas ${type === 'summaries' ? 'fa-file-alt' : 'fa-question-circle'}"></i>
                    <span>${type === 'summaries' ? 'الملخصات' : 'الاختبارات'}</span>
                </div>`;

        items.forEach(item => {
            html += `
                <div class="content-card">
                    <div class="content-info">
                        <i class="fas fa-file-pdf"></i>
                        <h4>${item.name}</h4>
                    </div>
                    <a href="#" class="download-btn" onclick="alert('سيتم إضافة الرابط قريباً'); return false;">
                        <i class="fas fa-download"></i>
                        تحميل
                    </a>
                </div>
            `;
        });

        html += '</div>';
    }

    document.getElementById("tabContent").innerHTML = html;
}

function globalSearch(val) {
    val = val.toLowerCase().trim();
    
    if (!val) {
        showDashboard();
        return;
    }

    let results = Object.keys(courses).filter(key => 
        courses[key].title.toLowerCase().includes(val) ||
        courses[key].code.toLowerCase().includes(val)
    );

    let html = `
        <button class="back-button" onclick="showDashboard()">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </button>
        <h2 class="course-title">
            <i class="fas fa-search"></i>
            نتائج (${results.length})
        </h2>
    `;

    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="fas fa-frown" style="font-size: 2rem;"></i>
                <h3>لا توجد نتائج</h3>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        results.forEach(key => {
            html += `
                <div class="card" onclick="openCourse('${key}')">
                    <i class="fas ${courses[key].icon}"></i>
                    <h3>${courses[key].title}</h3>
                    <span class="code">${courses[key].code}</span>
                </div>
            `;
        });
        html += '</div>';
    }

    animatePage(html);
}

// بدء التطبيق
showDashboard();
