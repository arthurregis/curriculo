import Header from "../components/Header";
import ProjectsList from "../components/ProjectsList";
import { GoDash } from "react-icons/go";

const Projects = () => {
    return (
        <div className="w-full p-6 min-h-screen bg-texture md:px-16 xl:px-28">
            <div className="flex justify-between pb-10">
                <div className="flex items-center h-[2rem]">
                    <GoDash className=" text-white overflow-hidden" size={60} />
                    <h2 className="text-white text-2xl">Projects</h2>
                </div>
                <Header />
            </div>
            <div className="">
                <ProjectsList />
            </div>
        </div>
    )
}

export default Projects;