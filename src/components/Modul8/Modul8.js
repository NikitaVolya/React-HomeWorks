import CinemaSchedule from "./CinemaSchedule";
import BlogPost from "./BlogPost";
import CityInfo from "./CityInfo";


function Modul8() {
    return <>
        <CinemaSchedule
            movie={{
                title: "Inception",
                poster: "https://picsum.photos/400/250",
                description: "A mind-bending thriller where dreams become reality.",
                sessions: ["12:00", "15:30", "18:00", "21:15"]
            }}
        />

        <BlogPost
            post={{
                title: "React is Awesome",
                date: "2025-08-25",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                tags: ["react", "javascript", "frontend"]
            }}
        />

        <CityInfo
            country="France"
            city={{
                name: "Paris",
                coat: "https://picsum.photos/100",
                description: "Paris is the capital of France, famous for its art and history.",
                population: "2,148,000",
                area: "105"
            }}
        />
    </>

}

export default Modul8;