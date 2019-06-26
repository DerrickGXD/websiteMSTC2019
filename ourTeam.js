$(document).ready(function () {
    var vid = document.getElementById("mstc_video");

    var MSTCMembers = [
        {
            Name: "Zhi Chao",
            University: "Unknown",
            Course: "Unknown",
            Department: "Adivsors",
            Position: "Advisor",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
        {
            Name: "Jaselyn Chan",
            University: "Imperial College London",
            Course: "Chemical Engineering",
            Department: "Advisors",
            Position: "Advisor",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "jaselyn_mstc.jpg"
        },
        {
            Name: "Cha Sheng",
            University: "University of Cambridge",
            Course: "Chemical Engineering",
            Department: "Advisors",
            Position: "Advisor",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "cs_mstc.jpg"
        },
        {
            Name: "Suhasan Kanagasabapathy",
            University: "Imperial College London",
            Course: "Physics",
            Department: "Executive",
            Position: "Executive Coordinator",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "A theoretical physics student from Imperial College London. Acting as the Executive Coordinator of MSTC 2019: Paradigm. Aiming to make a shift in participants' paradigm on Science and Technology!",
            Image: "suhasan_mstc.jpg"
        },
        {
            Name: "Kenrick",
            University: "University of Manchester",
            Course: "Unknown",
            Department: "Executive",
            Position: "Executive Coordinator",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "A theoretical physics student from Imperial College London. Acting as the Executive Coordinator of MSTC 2019: Paradigm. Aiming to make a shift in participants' paradigm on Science and Technology!",
            Image: "kenrick_mstc.jpg"
        },
        {
            Name: "Imran bin Ahmad Azhar",
            University: "Imperial College London",
            Course: "Unknown",
            Department: "Executive",
            Position: "Executive Coordinator",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
        {
            Name: "Iyliana Hiylda",
            University: "University College London",
            Course: "Chemical Engineering",
            Department: "Operation and Logistics",
            Position: "Head of Department",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "ih_mstc.jpg"
        },
        {
            Name: "Zhang Quan",
            University: "Unknown",
            Course: "Mechanical Engineering",
            Department: "Operation and Logistics",
            Position: "Head of Department",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "A mechanical engineering student from Imperial College London. Working as Head of Operations & Logistics in MSTC 2019.",
            Image: "zq_mstc.jpg"
        },
        {
            Name: "Shu Jaak Ooi",
            University: "University of Manchester",
            Course: "Chemical Engineering",
            Department: "Operation and Logistics",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "Chemical Engineering student at the University of Manchester.",
            Image: "unknown.jpg"
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
            Course: "Unknown",
            Department: "Operation and Logistics",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
        {
            Name: "Adam Muqhriz bin Nor Iskandar Shah",
            University: "King's College London",
            Course: "Unknown",
            Department: "Operation and Logistics",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
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
            Name: "Ivan",
            University: "University of Manchester",
            Course: "Unknown",
            Department: "Finance and Sponsorship",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "ivan_mstc.jpg"
        },
        {
            Name: "Wei Hao",
            University: "University of Southhampton",
            Course: "Unknown",
            Department: "Finance and Sponsorship",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "wh_mstc.jpg"
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
            Course: "Engineering Technology",
            Department: "Finance and Sponsorship",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "Engineering technology student from Universiti Malaysia Pahang. Working under Finance and sponsorship team in MSTC'19.",
            Image: "unknown.jpg"
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
            Image: "unknown.jpg"
        },
         {
            Name: "Derrick",
            University: "University College London",
            Course: "Unknown",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "derrick_mstc.jpg"
        },
         {
            Name: "Sher Ree",
            University: "University of Manchester",
            Course: "Chemical Engineering",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "sherree_mstc.jpg"
        },
         {
            Name: "Yun Hong Yong",
            University: "Imperial College London",
            Course: "Unknown",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
         {
            Name: "Zul",
            University: "Unknown",
            Course: "Unknown",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
         {
            Name: "Jenn Tan Jia Yin",
            University: "Imperial College London",
            Course: "Unknown",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
         {
            Name: "Jared Wong An Cheang",
            University: "University of Manchester",
            Course: "Chemical Engineering",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "meow meow meow woof woof woof.",
            Image: "unknown.jpg"
        },
         {
            Name: "Chin Yee Xin",
            University: "University Tunku Abdul Rahman",
            Course: "Unknown",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
         {
            Name: "Sanggavi A/P R Ganesan",
            University: "University Malaysia Pahang",
            Course: "Energy and Environmental Engineering Technology",
            Department: "Media and Marketing",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "Energy and Environmental Engineering Technology Student at University Malaysia Pahang. Working under Media and Marketing in MSTC 2019.",
            Image: "sangavi_mstc.jpg"
        },
         {
            Name: "Farhana",
            University: "Unknown",
            Course: "Unknown",
            Department: "Human Resources",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
         {
            Name: "Anjali",
            University: "Unknown",
            Course: "Unknown",
            Department: "Human Resources",
            Position: "Officer",
            About_MSTC: "Join MSTC, you'll never regret!",
            About_Me: "I haven't reveal about myself yet.",
            Image: "unknown.jpg"
        },
    ];
    var mstcdepartment = [
        
        {
            Department: "Executive Coordinator",
            Job_Description: "Leads the organizing team, provides guidance to the departments and acts as spokesperson for MSTC. Provides direction and ensures success of the event."
        },
        {
            Department: "Deputy Executive Coordinator",
            Job_Description: "Assist Executive Coordinator and work with HODs. Acts as EC when away and chairs Department meetings."
        },
        {
            Department: "Head of Department",
            Job_Description: "Manages operations of their respective departments and work closely with coordinators."
        },
        {
            Department: "Officer",
            Job_Description: "Works closely with HODs in their respective departments, performing specific, department-related tasks."
        },
        {
            Department: "Operations and Logistics",
            Job_Description: "Handles the acquisition and management of logistical items such as venue,food and event protocol. Also in charge of securing speakers, security and flow of event."
        },
        {
            Department: "Finance and Sponsorship",
            Job_Description: "Drafts budget and sponsorship packages. Manages bank account and oversees cash flow for the event."
        },
        {
            Department: "Media and Marketing",
            Job_Description: "In charge of creating promotional content, such as social media posts, posters, videos, webpage and so on."
        }    
        
    ]
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

        if (43 <= videoTime && videoTime < 43.3) {
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

        if (43.3 <= videoTime && videoTime < 43.8) {
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
