// دمج بيانات المساقات مع المحاضرات
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

// متغيرات للتنقل بين الصفحات
let navigationHistory = [];
let currentSemester = null;
let currentCourse = null;
let currentTab = 'books';

function animatePage(html) {
    document.getElementById("main").innerHTML = html;
}

function goBack() {
    if (navigationHistory.length > 0) {
        const lastState = navigationHistory.pop();
        if (lastState.type === 'semester') {
            showSemester(lastState.semester);
        } else if (lastState.type === 'course') {
            showCourse(lastState.courseKey, lastState.tab);
        } else {
            showDashboard();
        }
    } else {
        showDashboard();
    }
}

function showDashboard() {
    navigationHistory = []; // مسح التاريخ عند العودة للرئيسية
    currentSemester = null;
    currentCourse = null;
    
    animatePage(`
        <h1 class="page-title">
            <i class="fas fa-crown"></i>
            جامعة الاقصى
            <i class="fas fa-crown"></i>
        </h1>

        <div class="theme-selector">
            <button onclick="setTheme('blue')" class="theme-btn blue" title="أزرق"></button>
            <button onclick="setTheme('gold')" class="theme-btn gold" title="ذهبي"></button>
            <button onclick="setTheme('black')" class="theme-btn black" title="أسود"></button>
        </div>

        <div class="card" style="margin-bottom: 20px;">
            <i class="fas fa-user-nurse icon-medium"></i>
            <h2>تمريض - سنة أولى</h2>
        </div>

        <div class="grid">
            <div class="card" onclick="openSemester(1)">
                <i class="fas fa-calendar-alt icon-small"></i>
                <h3>الفصل الأول</h3>
                <span class="code">7 مساقات</span>
            </div>

            <div class="card" onclick="openSemester(2)">
                <i class="fas fa-calendar-check icon-small"></i>
                <h3>الفصل الثاني</h3>
                <span class="code">7 مساقات</span>
            </div>
        </div>
    `);
}

function openSemester(sem) {
    navigationHistory.push({ type: 'dashboard' });
    currentSemester = sem;
    showSemester(sem);
}

function showSemester(sem) {
    const list = sem === 1 ? 
        ["biology", "chemistry", "physics", "anatomy", "physiology", "biochemistry", "med_terms"] :
        ["nursing_practical", "nursing1", "safety", "microbio", "biochem2", "quran", "anatomy2"];

    let html = `
        <button class="back-button" onclick="goBack()">
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
                <i class="fas ${courses[key].icon} icon-medium"></i>
                <h3>${courses[key].title}</h3>
                <span class="code">${courses[key].code}</span>
            </div>
        `;
    });

    html += "</div>";
    animatePage(html);
}

function openCourse(key) {
    navigationHistory.push({ type: 'semester', semester: currentSemester });
    currentCourse = key;
    showCourse(key, 'books');
}

function showCourse(key, tab) {
    const course = courses[key];
    currentTab = tab;
    
    let html = `
        <button class="back-button" onclick="goBack()">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </button>
        
        <h2 class="course-title">
            <i class="fas ${course.icon} icon-small"></i>
            ${course.title}
        </h2>

        <div class="tabs">
            <div class="tab ${tab === 'books' ? 'active' : ''}" onclick="switchTab(this, '${key}', 'books')">
                <i class="fas fa-book icon-tiny"></i> كتب
            </div>
            <div class="tab ${tab === 'summaries' ? 'active' : ''}" onclick="switchTab(this, '${key}', 'summaries')">
                <i class="fas fa-file-alt icon-tiny"></i> ملخصات
            </div>
            <div class="tab ${tab === 'exams' ? 'active' : ''}" onclick="switchTab(this, '${key}', 'exams')">
                <i class="fas fa-question-circle icon-tiny"></i> اختبارات
            </div>
            <div class="tab ${tab === 'lectures' ? 'active' : ''}" onclick="switchTab(this, '${key}', 'lectures')">
                <i class="fas fa-video icon-tiny"></i> محاضرات
            </div>
        </div>

        <div id="tabContent" class="tab-content"></div>
    `;

    animatePage(html);
    loadTabContent(key, tab);
}

function switchTab(el, courseKey, type) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    el.classList.add("active");
    currentTab = type;
    loadTabContent(courseKey, type);
}

function loadTabContent(courseKey, type) {
    const course = courses[courseKey];
    let html = '';

    if (type === 'books') {
        html = `
            <div class="books-section">
                <div class="section-title">
                    <i class="fas fa-book icon-small"></i>
                    <span>الكتب الدراسية</span>
                </div>
        `;

        course.books.forEach(book => {
            if (book.coming) {
                html += `
                    <div class="book-button" onclick="alert('سيتم إضافة الرابط قريباً')" style="cursor: pointer;">
                        <i class="fas fa-book-open icon-small"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-clock icon-tiny"></i>
                            قريباً
                        </div>
                    </div>
                `;
            } else {
                html += `
                    <a href="${book.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-book-open icon-small"></i>
                        <span>${book.name}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer icon-tiny"></i>
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
                    <i class="fas fa-video icon-small"></i>
                    <span>المحاضرات المسجلة</span>
                </div>
        `;

        if (course.lectures && course.lectures.length > 0) {
            course.lectures.forEach(lecture => {
                const icon = lecture.type === 'youtube' ? 'fa-youtube' : 'fa-google-drive';
                html += `
                    <a href="${lecture.link}" class="book-button" target="_blank" rel="noopener noreferrer">
                        <i class="fab ${icon} icon-small" style="color: ${lecture.type === 'youtube' ? '#FF0000' : '#34A853'};"></i>
                        <span>${lecture.name}</span>
                        <div class="click-here">
                            <i class="fas fa-hand-pointer icon-tiny"></i>
                            مشاهدة
                        </div>
                    </a>
                `;
            });
        } else {
            html += `
                <div class="content-card" style="justify-content: center; text-align: center;">
                    <div class="content-info">
                        <i class="fas fa-video-slash icon-medium" style="color: #95a5a6;"></i>
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
                    <i class="fas ${type === 'summaries' ? 'fa-file-alt' : 'fa-question-circle'} icon-small"></i>
                    <span>${type === 'summaries' ? 'الملخصات' : 'الاختبارات'}</span>
                </div>`;

        items.forEach(item => {
            html += `
                <div class="content-card">
                    <div class="content-info">
                        <i class="fas fa-file-pdf icon-small"></i>
                        <h4>${item.name}</h4>
                    </div>
                    <a href="#" class="download-btn" onclick="alert('سيتم إضافة الرابط قريباً'); return false;">
                        <i class="fas fa-download icon-tiny"></i>
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
        <button class="back-button" onclick="goBack()">
            <i class="fas fa-arrow-right"></i>
            رجوع
        </button>
        <h2 class="course-title">
            <i class="fas fa-search icon-small"></i>
            نتائج (${results.length})
        </h2>
    `;

    if (results.length === 0) {
        html += `
            <div class="card" style="text-align: center; padding: 30px;">
                <i class="fas fa-frown icon-large" style="font-size: 2rem;"></i>
                <h3>لا توجد نتائج</h3>
            </div>
        `;
    } else {
        html += '<div class="grid">';
        results.forEach(key => {
            html += `
                <div class="card" onclick="openCourse('${key}')">
                    <i class="fas ${courses[key].icon} icon-medium"></i>
                    <h3>${courses[key].title}</h3>
                    <span class="code">${courses[key].code}</span>
                </div>
            `;
        });
        html += '</div>';
    }

    animatePage(html);
}

// دوال تغيير الثيم
function setTheme(theme) {
    const root = document.documentElement;
    
    // إزالة جميع كلاسات الثيم
    document.body.classList.remove('theme-blue', 'theme-gold', 'theme-black');
    
    switch(theme) {
        case 'blue':
            document.body.classList.add('theme-blue');
            root.style.setProperty('--primary-color', '#3498db');
            root.style.setProperty('--primary-dark', '#2980b9');
            root.style.setProperty('--accent-color', '#f1c40f');
            break;
        case 'gold':
            document.body.classList.add('theme-gold');
            root.style.setProperty('--primary-color', '#D4AF37');
            root.style.setProperty('--primary-dark', '#AA8C2C');
            root.style.setProperty('--accent-color', '#FFFFFF');
            break;
        case 'black':
            document.body.classList.add('theme-black');
            root.style.setProperty('--primary-color', '#2C3E50');
            root.style.setProperty('--primary-dark', '#1A252F');
            root.style.setProperty('--accent-color', '#3498db');
            break;
    }
    
    // حفظ الثيم المختار
    localStorage.setItem('selectedTheme', theme);
}

// تحميل الثيم المحفوظ
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'blue';
    setTheme(savedTheme);
}

// إضافة كلاسات CSS للثيمات
const style = document.createElement('style');
style.textContent = `
    :root {
        --primary-color: #3498db;
        --primary-dark: #2980b9;
        --accent-color: #f1c40f;
        --bg-gradient-start: #f5f7fa;
        --bg-gradient-end: #c3cfe2;
        --card-bg: white;
        --text-color: #2c3e50;
        --text-light: #7f8c8d;
    }
    
    body.theme-blue {
        --primary-color: #3498db;
        --primary-dark: #2980b9;
        --accent-color: #f1c40f;
    }
    
    body.theme-gold {
        --primary-color: #D4AF37;
        --primary-dark: #AA8C2C;
        --accent-color: #FFFFFF;
        --bg-gradient-start: #000000;
        --bg-gradient-end: #1a1a1a;
        --card-bg: #2d2d2d;
        --text-color: #D4AF37;
        --text-light: #cccccc;
    }
    
    body.theme-gold .card {
        background: #2d2d2d;
        color: #D4AF37;
        border: 1px solid #D4AF37;
    }
    
    body.theme-gold .card h3 {
        color: #D4AF37;
    }
    
    body.theme-black {
        --primary-color: #2C3E50;
        --primary-dark: #1A252F;
        --accent-color: #3498db;
        --bg-gradient-start: #ecf0f1;
        --bg-gradient-end: #bdc3c7;
        --card-bg: white;
        --text-color: #2c3e50;
    }
    
    body {
        background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
        color: var(--text-color);
    }
    
    .card {
        background: var(--card-bg);
        color: var(--text-color);
    }
    
    .icon-tiny {
        font-size: 0.9rem !important;
    }
    
    .icon-small {
        font-size: 1.2rem !important;
    }
    
    .icon-medium {
        font-size: 1.5rem !important;
    }
    
    .icon-large {
        font-size: 2rem !important;
    }
    
    .theme-selector {
        display: flex;
        justify-content: center;
        gap: 10px;
        margin-bottom: 20px;
    }
    
    .theme-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid white;
        cursor: pointer;
        transition: transform 0.3s;
    }
    
    .theme-btn:hover {
        transform: scale(1.1);
    }
    
    .theme-btn.blue {
        background: linear-gradient(135deg, #3498db, #2980b9);
    }
    
    .theme-btn.gold {
        background: linear-gradient(135deg, #D4AF37, #AA8C2C);
    }
    
    .theme-btn.black {
        background: linear-gradient(135deg, #2C3E50, #1A252F);
    }
    
    .back-button {
        background: var(--primary-color);
    }
    
    .back-button:hover {
        background: var(--primary-dark);
    }
    
    .tab.active {
        background: var(--primary-color);
    }
    
    .download-btn {
        background: var(--primary-color);
    }
    
    .download-btn:hover {
        background: var(--primary-dark);
    }
    
    .click-here {
        background: var(--accent-color) !important;
    }
`;

document.head.appendChild(style);

// بدء التطبيق مع تحميل الثيم المحفوظ
loadSavedTheme();
showDashboard();
