var i = 0;
var j = 0;
var k = 0;
var txtName = '';
var txtDept = '';
var txtTitle = '';
var txtDescription = '';
var speed = 100;
var modalType = '';
var modalArr = ["advisorModal", "executiveModal", "logisticsModal", "financeModal", "mediaModal", "hrModal"];

var MSTCMembers = [
    {
        Name: "Zhi Chao",
        University: "University College London",
        Course: "Economics",
        Department: "Advisors",
        Position: "Advisor",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Final year Economics student at UCL who was also one of the executive coordinators of MSTC 2018.",
        Image: "zhi_mstc.jpg"
        },
    {
        Name: "Azrai",
        University: "University of Southampton",
        Course: "Mechanical Engineering",
        Department: "Advisors",
        Position: "Advisor",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Next Elon Musk in the making (I hope).",
        Image: "azrai_mstc.jpg"
        },
    {
        Name: "Jaselyn Chan",
        University: "Imperial College London",
        Course: "Chemical Engineering",
        Department: "Advisors",
        Position: "Advisor",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Passionate about music, food and art. Besides being the President of YME-UK, I am also in the A Capella Team at Imperial. Always open for a chat so hit me up if you need any help or advice!.",
        Image: "jaselyn_mstc.png"
        },
    {
        Name: "Cha Sheng",
        University: "University of Cambridge",
        Course: "Chemical Engineering",
        Department: "Advisors",
        Position: "Advisor",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Chemical engineering student from Cambridge.",
        Image: "cs_mstc.png"
        },
    {
        Name: "Suhasan Kanagasabapathy",
        University: "Imperial College London",
        Course: "Physics",
        Department: "Executive",
        Position: "Executive Coordinator",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "A theoretical physics student from Imperial College London. Acting as the Executive Coordinator of MSTC 2019: Paradigm. Aiming to make a shift in participants' paradigm on Science and Technology!",
        Image: "suhasan_mstc.png"
        },
    {
        Name: "Kenrick Tan",
        University: "University of Manchester",
        Course: "Mechanical Engineering",
        Department: "Executive",
        Position: "Executive Coordinator",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Fanatic for anything to do with food. Studying a Mechanical Engineering degree at the University of Manchester!!",
        Image: "kenrick_mstc.png"
        },
    {
        Name: "Imran bin Ahmad Azhar",
        University: "Imperial College London",
        Course: "Aeronautical Engineering",
        Department: "Executive",
        Position: "Executive Coordinator",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Adrenaline and speed junkie. However, also slowest at the dinner table.",
        Image: "imran_mstc.jpeg"
        },
    {
        Name: "Iyliana Hiylda",
        University: "University College London",
        Course: "Chemical Engineering",
        Department: "Operation and Logistics",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "A wanderer, currently based in London pursuing Chemical Engineering. Ona mission to drink less boba!",
        Image: "ih_mstc.png"
        },
    {
        Name: "Zhang Quan",
        University: "Imperial College London",
        Course: "Mechanical Engineering",
        Department: "Operation and Logistics",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "A mechanical engineering student from Imperial College London. Working as Head of Operations & Logistics in MSTC 2019.",
        Image: "zq_mstc.png"
        },
    {
        Name: "Shu Jaak Ooi",
        University: "University of Manchester",
        Course: "Chemical Engineering",
        Department: "Operation and Logistics",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "I'm studying chemical engineering at Manchester, and I'll see you at MSTC 2019!",
        Image: "shu_mstc.jpeg"
        },
    {
        Name: "Yeo Wei Hung",
        University: "University of Bristol",
        Course: "Aerospace Engineering",
        Department: "Operation and Logistics",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Aerospace engineering student from University of Bristol.",
        Image: "yeo_mstc.jpg"
        },
    {
        Name: "Wei Yang Lee",
        University: "Imperial College London",
        Course: "Chemical Engineering",
        Department: "Operation and Logistics",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Chemical Engineering Student at Imperial College London.",
        Image: "unknown.jpg"
        },
    {
        Name: "Adam Muqhriz bin Nor Iskandar Shah",
        University: "King's College London",
        Course: "Biomedical Engineering",
        Department: "Operation and Logistics",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Biomedical Engineering student at King’s College London",
        Image: "unknown.jpg"
        },
    {
        Name: "Leong Chun Yin",
        University: "University College London",
        Course: "Unknown",
        Department: "Operation and Logistics",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "I haven't reveal about myself yet.",
        Image: "unknown.jpg"
        },
    {
        Name: "Ivan Chong",
        University: "University of Manchester",
        Course: "Chemical Engineering",
        Department: "Finance and Sponsorship",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Chemical Engineering student at the University of Manchester",
        Image: "ivan_mstc.png"
        },
    {
        Name: "Wei Hao",
        University: "University of Southhampton",
        Course: "Electrical and Electronic Engineering",
        Department: "Finance and Sponsorship",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Electrical and Electronic Engineering Student seeking oppoturnities in building next generations of biomedical devices.",
        Image: "wh_mstc.png"
        },
    {
        Name: "Zhen-Yen Chan",
        University: "London School of Economics",
        Course: "Mathematics and Statistics",
        Department: "Finance and Sponsorship",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Mathematics & Statistics student at the LSE. Working under Finance & Sponsorship for MSTC 2019.",
        Image: "zy_mstc.jpg"
        },
    {
        Name: "Bryan Wong Weng Kit",
        University: "Monash University Malaysia",
        Course: "Unknown",
        Department: "Finance and Sponsorship",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "I haven't reveal about myself yet.",
        Image: "unknown.jpg"
        },
    {
        Name: "Rabiatul 'Adawiyah Binti Salamth Ebramsa",
        University: "University Malaysia Pahang",
        Course: "Energy and Environment Engineering Technology",
        Department: "Finance and Sponsorship",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Individual driven towards learning from real life and practical situations rather than sponging off a book.",
        Image: "rabiatul_mstc.jpg"
        },
    {
        Name: "Muhammad Ikram Bin Firman",
        University: "Universiti Teknologi PETRONAS",
        Course: "Unknown",
        Department: "Finance and Sponsorship",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "I haven't reveal about myself yet.",
        Image: "unknown.jpg"
        },
    {
        Name: "Toh Ho Yen",
        University: "University of Kent",
        Course: "Business management",
        Department: "Finance and Sponsorship",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Business management in university of kent.",
        Image: "hoyen_mstc.jpg"
        },
    {
        Name: "Derrick Goh",
        University: "University College London",
        Course: "Computer Science",
        Department: "Media and Marketing",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "It's funny that I never like coffee and I'm afraid of snakes, but I have to deal with Java and Python occassionally.",
        Image: "derrick_mstc.png"
        },
    {
        Name: "Sher Ree",
        University: "University of Manchester",
        Course: "Chemical Engineering",
        Department: "Media and Marketing",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "The thought of making things more efficient and working hard to think of cost-cutting, manpower reducing and simplified processes really is the highlight of an engineer.",
        Image: "sherree_mstc.png"
        },
    {
        Name: "Yun Hong Yong",
        University: "Imperial College London",
        Course: "Electrical Engineering",
        Department: "Media and Marketing",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "I haven't reveal about myself yet.",
        Image: "yunhong_mstc.jpg"
        },
    {
        Name: "Muhd Zulhanis Hassan",
        University: "University of Malaya",
        Course: "Applied Geology",
        Department: "Media and Marketing",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Minerals hunting, either diamond or charcoal.",
        Image: "zul_mstc.jpg"
        },
    {
        Name: "Jenn Tan Jia Yin",
        University: "Imperial College London",
        Course: "Unknown",
        Department: "Media and Marketing",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "I haven't reveal about myself yet.",
        Image: "jenn_mstc.jpg"
        },
    {
        Name: "Jared Wong An Cheang",
        University: "University of Manchester",
        Course: "Chemical Engineering",
        Department: "Media and Marketing",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "meow meow meow woof woof woof.",
        Image: "jared_mstc.png"
        },
    {
        Name: "Chin Yee Xin",
        University: "University Tunku Abdul Rahman",
        Course: "Econimics",
        Department: "Media and Marketing",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Economics student and UTAR female futsal team representative.",
        Image: "yeexin_mstc.jpg"
        },
    {
        Name: "Sanggavi A/P R Ganesan",
        University: "University Malaysia Pahang",
        Course: "Energand Environmental Engineering Technology",
        Department: "Media and Marketing",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Energy and Environmental Engineering Technology Student at University Malaysia Pahang. Working under Media and Marketing in MSTC 2019.",
        Image: "sangavi_mstc.jpg"
        },
    {
        Name: "Farhana Rosol",
        University: "University College London",
        Course: "Chemical Engineering",
        Department: "Human Resources",
        Position: "Head of Department",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "An MEng Chemical Engineering student currently interning at Petronas Dagangan Berhad under Health, Safety and Environment (HSE) Risk Division. What I like? Definitely matcha.",
        Image: "farhana_mstc.png"
        },
    {
        Name: "Abdul Moeed Rehman",
        University: "University Technology Malaysia",
        Course: "Mechanical Engineering",
        Department: "Human Resources",
        Position: "Officer",
        About_MSTC: "Join MSTC, you'll never regret!",
        About_Me: "Automotive enthusiast currently pursuing my bachelors degree in Mechanical/Automotive engineering. Upcoming Stig in the car world.",
        Image: "abdul_mstc.jpg"
        }
    ];



function typeWriter() {
    if (i < txtName.length) {
        document.getElementById("memberName").innerHTML += txtName.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function typeWriter2() {
    if (j < txtDept.length) {
        document.getElementById("department_name").innerHTML += txtDept.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}

function typeWriter3() {
    if (k < txtTitle.length) {
        document.getElementById("title_name").innerHTML += txtTitle.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }


}

function setModalType(modal) {
    modalType = modalArr[modal];
}

function modalBack() {
    document.getElementById(modalType).style.visibility = "visible";

}

function setModal(id) {
    i = 0;
    j = 0;
    k = 0;
    document.getElementById(modalType).style.visibility = "hidden";
    document.getElementById("memberName").innerHTML = "";
    document.getElementById("department_name").innerHTML = "";
    document.getElementById("description_name").innerHTML = "";
    document.getElementById("title_name").innerHTML = "";



    if (id != null) {
        $("#member_img").attr("src", "assets/img/team/" + MSTCMembers[id].Image);
        txtName = MSTCMembers[id].Name;
        txtDept = MSTCMembers[id].Department;
        txtTitle = MSTCMembers[id].Position;
        txtDescription = MSTCMembers[id].University + '<br><br><br>' + MSTCMembers[id].Course + '<br><br><br>' + MSTCMembers[id].About_Me;
        document.getElementById("description_name").innerHTML = txtDescription;
        setTimeout(typeWriter, 500);
        setTimeout(typeWriter2, 1500);
        setTimeout(typeWriter3, 1500);
    }

}





$(document).ready(function () {
    var vid = document.getElementById("mstc_video");
    var ctx = document.getElementById('pieChart').getContext('2d');
    var ctx2 = document.getElementById('pieChart2').getContext('2d');
    var ctx3 = document.getElementById('pieChart3').getContext('2d');
    var ctx4 = document.getElementById('pieChart4').getContext('2d');
    var ctx5 = document.getElementById('pieChart5').getContext('2d');
    var ctx6 = document.getElementById('pieChart6').getContext('2d');

    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Advisors", "Executive", "Operations", "Finance", "Media", "HR"],
            datasets: [{
                backgroundColor: ["#2ecc71", "#34495e", "#f15840", "#9b59b6", "#f1c40f", "#F17CB0", "#3498db"],
                data: [4, 3, 7, 7, 8, 2]
            }]
        },
        border: 0

    });

    var myPieChart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ["Malay", "Chinese", "Indian"],
            datasets: [{
                backgroundColor: ["#2ecc71", "#f15840", "#9b59b6"],
                data: [8, 20, 3]
            }]
        },
        border: 0

    });


    var myPieChart3 = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ["Economics", "Unknown", "Mechanical", "Chemical", "Aerospace", "Physics", "Biomedical", "Computer Science", "Electric", "Maths/Business", "Civil", "Energy and Environmental", "Applied Geology"],
            datasets: [{
                backgroundColor: ["#f15840","#111f5c","#f1c40f", "#2ecc71", "#34495e", "#54b033","#3299a8","#b03350", "#7dafc9", "#004717", "#d813ed", "#3260a8", "#4a6c52", "2f34f2"],
                data: [2, 3, 4, 9,2,1,1,1,2,1,1,1,2,1]
            }]
        },
        border: 0

    });

    var myPieChart4 = new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ["Malaysia", "UK"],
            datasets: [{
                backgroundColor: ["#f1c40f", "#3498db"],
                data: [6, 25]
            }]
        },
        border: 0

    });


    var myPieChart5 = new Chart(ctx5, {
        type: 'doughnut',
        data: {
            labels: ["Male", "Female"],
            datasets: [{
                backgroundColor: ["#34495e", "#9b59b6"],
                data: [21, 10]
            }]
        },
        border: 0

    });

    var myPieChart6 = new Chart(ctx6, {
        type: 'doughnut',
        data: {
            labels: ["YME-BOD", "Non YME-BOD"],
            datasets: [{
                backgroundColor: ["#f15840", "#f1c40f"],
                data: [11, 20]
            }]
        },
        options: {
            title: {
                display: true,
                text: ['To show more support to YME\'s flagship event,', 'this year\'s MSTC core team has the largest percentage of YME-BOD participations.']
            }
        },
        border: 0

    });




    vid.ontimeupdate = function () {



        var videoTime = vid.currentTime;



        if (videoTime < 5) {

            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (5 <= videoTime && videoTime < 8) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (8 <= videoTime && videoTime < 10) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (10 <= videoTime && videoTime < 14) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (14 <= videoTime && videoTime < 21) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (21 <= videoTime && videoTime < 27) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (27 <= videoTime && videoTime < 33.5) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }


        if (33.5 <= videoTime && videoTime < 36) {

            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }


        // beat drop
        if (36 <= videoTime && videoTime < 36.6) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (36.6 <= videoTime && videoTime < 37) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (37 <= videoTime && videoTime < 37.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (37.4 <= videoTime && videoTime < 37.8) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (37.8 <= videoTime && videoTime < 38.2) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (38.2 <= videoTime && videoTime < 38.6) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (38.6 <= videoTime && videoTime < 39) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (39 <= videoTime && videoTime < 39.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        //second beat


        if (39.4 <= videoTime && videoTime < 39.8) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (39.8 <= videoTime && videoTime < 40.2) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (40.2 <= videoTime && videoTime < 40.6) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }


        if (40.6 <= videoTime && videoTime < 41) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }


        if (41 <= videoTime && videoTime < 41.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }


        if (41.4 <= videoTime && videoTime < 41.8) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }
        //last four drop

        if (41.8 <= videoTime && videoTime < 42.1) {
            $("#suhasan").css({
                "filter": "invert(100%)"
            })

            $("#kenrick").css({
                "filter": "invert(100%)"
            })

            $("#derrick").css({
                "filter": "invert(100%)"
            })

            $("#weihao").css({
                "filter": "invert(100%)"
            })

            $("#sherree").css({
                "filter": "invert(100%)"
            })

            $("#farhana").css({
                "filter": "invert(100%)"
            })

            $("#zhangquan").css({
                "filter": "invert(100%)"
            })

            $("#ivan").css({
                "filter": "invert(100%)"
            })


        }

        if (42.1 <= videoTime && videoTime < 42.4) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (42.4 <= videoTime && videoTime < 42.7) {
            $("#suhasan").css({
                "filter": "invert(100%)"
            })

            $("#kenrick").css({
                "filter": "invert(100%)"
            })

            $("#derrick").css({
                "filter": "invert(100%)"
            })

            $("#weihao").css({
                "filter": "invert(100%)"
            })

            $("#sherree").css({
                "filter": "invert(100%)"
            })

            $("#farhana").css({
                "filter": "invert(100%)"
            })

            $("#zhangquan").css({
                "filter": "invert(100%)"
            })

            $("#ivan").css({
                "filter": "invert(100%)"
            })

        }

        if (42.7 <= videoTime && videoTime < 43) {


            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }


        if (43 <= videoTime && videoTime < 43.8) {
            $("#suhasan").css({
                "filter": "saturate(2)"
            })

            $("#kenrick").css({
                "filter": "saturate(2)"
            })

            $("#derrick").css({
                "filter": "saturate(2)"
            })

            $("#weihao").css({
                "filter": "saturate(2)"
            })

            $("#sherree").css({
                "filter": "saturate(2)"
            })

            $("#farhana").css({
                "filter": "saturate(2)"
            })

            $("#zhangquan").css({
                "filter": "saturate(2)"
            })

            $("#ivan").css({
                "filter": "saturate(2)"
            })

        }

        if (43.8 <= videoTime && videoTime < 44.6) {
            $("#suhasan").css({
                "filter": "contrast(300%)"
            })

            $("#kenrick").css({
                "filter": "contrast(300%)"
            })

            $("#derrick").css({
                "filter": "contrast(300%)"
            })

            $("#weihao").css({
                "filter": "contrast(300%)"
            })

            $("#sherree").css({
                "filter": "contrast(300%)"
            })

            $("#farhana").css({
                "filter": "contrast(300%)"
            })

            $("#zhangquan").css({
                "filter": "contrast(300%)"
            })

            $("#ivan").css({
                "filter": "contrast(300%)"
            })
        }

        if (44.6 <= videoTime && videoTime < 45.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (45.4 <= videoTime && videoTime < 46.2) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }





        if (46.2 <= videoTime && videoTime < 46.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (46.4 <= videoTime && videoTime < 46.8) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (46.8 <= videoTime && videoTime < 47.2) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (47.2 <= videoTime && videoTime < 47.5) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (47.5 <= videoTime && videoTime < 47.8) {
            $("#suhasan").css({
                "filter": "invert(100%)"
            })

            $("#kenrick").css({
                "filter": "invert(100%)"
            })

            $("#derrick").css({
                "filter": "invert(100%)"
            })

            $("#weihao").css({
                "filter": "invert(100%)"
            })

            $("#sherree").css({
                "filter": "invert(100%)"
            })

            $("#farhana").css({
                "filter": "invert(100%)"
            })

            $("#zhangquan").css({
                "filter": "invert(100%)"
            })

            $("#ivan").css({
                "filter": "invert(100%)"
            })
        }

        if (47.8 <= videoTime && videoTime < 48.1) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (48.1 <= videoTime && videoTime < 48.4) {
            $("#suhasan").css({
                "filter": "invert(100%)"
            })

            $("#kenrick").css({
                "filter": "invert(100%)"
            })

            $("#derrick").css({
                "filter": "invert(100%)"
            })

            $("#weihao").css({
                "filter": "invert(100%)"
            })

            $("#sherree").css({
                "filter": "invert(100%)"
            })

            $("#farhana").css({
                "filter": "invert(100%)"
            })

            $("#zhangquan").css({
                "filter": "invert(100%)"
            })

            $("#ivan").css({
                "filter": "invert(100%)"
            })
        }

        if (48.4 <= videoTime && videoTime < 48.7) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (48.7 <= videoTime && videoTime < 49) {
            $("#suhasan").css({
                "filter": "invert(100%)"
            })

            $("#kenrick").css({
                "filter": "invert(100%)"
            })

            $("#derrick").css({
                "filter": "invert(100%)"
            })

            $("#weihao").css({
                "filter": "invert(100%)"
            })

            $("#sherree").css({
                "filter": "invert(100%)"
            })

            $("#farhana").css({
                "filter": "invert(100%)"
            })

            $("#zhangquan").css({
                "filter": "invert(100%)"
            })

            $("#ivan").css({
                "filter": "invert(100%)"
            })
        }

        if (49 <= videoTime && videoTime < 49.3) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (49 <= videoTime && videoTime < 49.3) {
            $("#suhasan").css({
                "filter": "invert(100%)"
            })

            $("#kenrick").css({
                "filter": "invert(100%)"
            })

            $("#derrick").css({
                "filter": "invert(100%)"
            })

            $("#weihao").css({
                "filter": "invert(100%)"
            })

            $("#sherree").css({
                "filter": "invert(100%)"
            })

            $("#farhana").css({
                "filter": "invert(100%)"
            })

            $("#zhangquan").css({
                "filter": "invert(100%)"
            })

            $("#ivan").css({
                "filter": "invert(100%)"
            })
        }

        if (49.3 <= videoTime && videoTime < 49.5) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (49.5 <= videoTime && videoTime < 50) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }









        //kenrick and suhasan
        if (50 <= videoTime && videoTime < 56.8) {
            console.log("yes");

            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        //blink

        if (56.8 <= videoTime && videoTime < 57) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (57 <= videoTime && videoTime < 57.2) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (57.2 <= videoTime && videoTime < 57.4) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (57.4 <= videoTime && videoTime < 57.6) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (57.6 <= videoTime && videoTime < 57.8) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (57.8 <= videoTime && videoTime < 58) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (58 <= videoTime && videoTime < 58.2) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (58.2 <= videoTime && videoTime < 58.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (58.4 <= videoTime && videoTime < 58.6) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })

        }

        if (58.6 <= videoTime && videoTime < 58.8) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (58.8 <= videoTime && videoTime < 59) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (59 <= videoTime && videoTime < 59.2) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })

        }

        if (59.2 <= videoTime && videoTime < 59.4) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (59.4 <= videoTime && videoTime < 59.6) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (59.6 <= videoTime && videoTime < 59.8) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (59.8 <= videoTime && videoTime < 60) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (60 <= videoTime && videoTime < 60.2) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (60.2 <= videoTime && videoTime < 60.4) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (60.4 <= videoTime && videoTime < 60.6) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (60.6 <= videoTime && videoTime < 60.8) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (60.8 <= videoTime && videoTime < 61) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (61 <= videoTime && videoTime < 61.2) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (61.2 <= videoTime && videoTime < 61.4) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }

        if (61.4 <= videoTime && videoTime < 61.6) {
            $("#suhasan").css({
                "filter": "brightness(30%)"
            })

            $("#kenrick").css({
                "filter": "brightness(30%)"
            })

            $("#derrick").css({
                "filter": "brightness(30%)"
            })

            $("#weihao").css({
                "filter": "brightness(30%)"
            })

            $("#sherree").css({
                "filter": "brightness(30%)"
            })

            $("#farhana").css({
                "filter": "brightness(30%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(30%)"
            })

            $("#ivan").css({
                "filter": "brightness(30%)"
            })
        }

        if (videoTime > 61.6) {
            $("#suhasan").css({
                "filter": "brightness(100%)"
            })

            $("#kenrick").css({
                "filter": "brightness(100%)"
            })

            $("#derrick").css({
                "filter": "brightness(100%)"
            })

            $("#weihao").css({
                "filter": "brightness(100%)"
            })

            $("#sherree").css({
                "filter": "brightness(100%)"
            })

            $("#farhana").css({
                "filter": "brightness(100%)"
            })

            $("#zhangquan").css({
                "filter": "brightness(100%)"
            })

            $("#ivan").css({
                "filter": "brightness(100%)"
            })
        }





    };
});
