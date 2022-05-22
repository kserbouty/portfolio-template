let browser_lang = navigator.language;
let nav_flag_en = document.getElementById('nav_flag_en');
let nav_flag_fr = document.getElementById('nav_flag_fr');
let nav_home = document.getElementById('nav_home');
let nav_skills = document.getElementById('nav_skills');
let nav_projects = document.getElementById('nav_projects');
let head_subtitle = document.getElementById('head_subtitle');
let head_resume = document.getElementById('head_resume');
let skills_title = document.getElementById('skills_title');
let projects_title = document.getElementById('projects_title');
let p_title = document.getElementById('p_title');
let p_info = document.getElementById('p_info');
let p2_info = document.getElementById('p2_info');
let p3_info = document.getElementById('p3_info');
let p4_button = document.getElementById('p4_button');
let p4_button2 = document.getElementById('p4_button2');
let p5_info = document.getElementById('p5_info');
let p6_info = document.getElementById('p6_info');
let p6_button = document.getElementById('p6_button');
let error = document.getElementById('error');

let drop_home = document.getElementById('drop_home');
let drop_projects = document.getElementById('drop_projects');
let drop_skills = document.getElementById('drop_skills');
let drop_flag_en = document.getElementById('drop_flag_en');
let drop_flag_fr = document.getElementById('drop_flag_fr');

const translation = {
    english: {
        nav_home: "Home",
        nav_skills: "Skills",
        nav_projects: "Projects",
        head_subtitle: "Head",
        head_resume: "Resume",
        skills_title: "Skills",
        projects_title: "Projects",
        p_title: "Project1",
        p_info: "Project info",
        p2_info: "Project info",
        p3_info: "Project info",
        p4_button: "Button1",
        p4_button2: "Button2",
        p5_info: "Project info",
        p6_info:"Project info",
        p6_button: "Button3",
        error: "Error message",

        drop_home: "Home",
        drop_projects: "Skills",
        drop_skills: "Projects",
    },
    french: {
        nav_home: "",
        nav_skills: "",
        nav_projects: "",
        head_subtitle: "",
        head_resume: "",
        skills_title: "",
        projects_title: "",
        p_title: "",
        p_info: "",
        p2_info: "",
        p3_info: "",
        p4_button: "",
        p4_button2: "",
        p5_info: "",
        p6_info:"",
        p6_button: "",
        error: "",

        drop_home: "",
        drop_projects: "",
        drop_skills: "",
    }
};

function translateToEnglish() {
    nav_flag_en.style.display = 'none';
    nav_flag_fr.style.display = 'block';

    nav_home.textContent = translation['english'].nav_home;
    nav_skills.textContent = translation['english'].nav_skills;
    nav_projects.textContent = translation['english'].nav_projects;
    head_subtitle.textContent = translation['english'].head_subtitle;
    head_resume.textContent = translation['english'].head_resume;
    skills_title.textContent = translation['english'].skills_title;
    projects_title.textContent = translation['english'].projects_title;
    p_title.textContent = translation['english'].p_title;
    p_info.textContent = translation['english'].p_info;
    p2_info.textContent = translation['english'].p2_info;
    p3_info.textContent = translation['english'].p3_info;
    p4_button.textContent = translation['english'].p4_button;
    p4_button2.textContent = translation['english'].p4_button2;
    p5_info.textContent = translation['english'].p5_info;
    p6_info.textContent = translation['english'].p6_info;
    p6_button.textContent = translation['english'].p6_button;
    error.textContent = translation['english'].error;

    drop_flag_en.style.display = 'none';
    drop_flag_fr.style.display = 'block';

    drop_home.textContent = translation['english'].drop_home;
    drop_projects.textContent = translation['english'].drop_projects;
    drop_skills.textContent = translation['english'].drop_skills;

    document.documentElement.setAttribute('lang', 'en');
}

function translateToFrench() {
    nav_flag_en.style.display = 'block';
    nav_flag_fr.style.display = 'none';

    nav_home.textContent = translation['french'].nav_home;
    nav_skills.textContent = translation['french'].nav_skills;
    nav_projects.textContent = translation['french'].nav_projects;
    head_subtitle.textContent = translation['french'].head_subtitle;
    head_resume.textContent = translation['french'].head_resume;
    skills_title.textContent = translation['french'].skills_title;
    projects_title.textContent = translation['french'].projects_title;
    p_title.textContent = translation['french'].p_title;
    p_info.textContent = translation['french'].p_info;
    p2_info.textContent = translation['french'].p2_info;
    p3_info.textContent = translation['french'].p3_info;
    p4_button.textContent = translation['french'].p4_button;
    p4_button2.textContent = translation['french'].p4_button2;
    p5_info.textContent = translation['french'].p5_info;
    p6_info.textContent = translation['french'].p6_info;
    p6_button.textContent = translation['french'].p6_button;
    error.textContent = translation['french'].error;

    drop_flag_en.style.display = 'block';
    drop_flag_fr.style.display = 'none';

    drop_home.textContent = translation['french'].drop_home;
    drop_projects.textContent = translation['french'].drop_projects;
    drop_skills.textContent = translation['french'].drop_skills;

    document.documentElement.setAttribute('lang', 'fr');
}

function checkBrowserLanguage() {
	if (browser_lang === "fr" || browser_lang === "fr-FR") {
		translateToFrench();
	} else {
		translateToEnglish();
	}
}

document.getElementById('nav_flag_en').onclick = function () { translateToEnglish(); };
document.getElementById('nav_flag_fr').onclick = function () { translateToFrench(); };

document.getElementById('drop_flag_en').onclick = function () { translateToEnglish(); };
document.getElementById('drop_flag_fr').onclick = function () { translateToFrench(); };

window.addEventListener('load', checkBrowserLanguage);
