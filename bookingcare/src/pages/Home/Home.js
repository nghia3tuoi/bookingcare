import Banner from "./Banner";
import Ads from "./Ads";
import Doctor from "./Doctor";
import Specialist from "./Specialist";
import Facilities from "./Facilities";
import OutstandingDoctor from "./OutstandingDoctor";
import HandBook from "./Handbook";
import Media from "./Media";
import DownloadApp from "./DownloadApp";
import DoctorAndMedical from "./DoctorAndMedical";
function Home() {
  return (
    <div id="container" className="w-screen ">
      <div>
        <Banner />
        <Ads />
        <Doctor />
        <Specialist />
        <Facilities />
        <OutstandingDoctor />
        <HandBook />
        <Media />
        <DownloadApp />
        <DoctorAndMedical />
      </div>
    </div>
  );
}

export default Home;
