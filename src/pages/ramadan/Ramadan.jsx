import HeadSection from "./components/headSection/HeadSection";
import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";
import SectionThree from "./components/sectionThree/SectionThree";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionSex from "./components/sectionSex/SectionSex";
import Footer from "./components/footer/Footer";
import { useOutletContext } from "react-router";
import { useEffect } from "react";
function Ramadan() {
    const {language} = useOutletContext();
    const [lang, setLang] = language;
    return (
        <div className={"Ramadan w-full h-full overflow-y-scroll overflow-x-hidden scroll-smooth"}>
            
            {/* Head Section */}
            <HeadSection lang={lang} setLang={setLang} className=""/>
            {/* section 1 */}
            <SectionOne lang={lang} setLang={setLang} className="lrr:px-2 lrr:min-h-full min-h-[65vh]" />
            {/* section 2 */}
            <SectionTwo lang={lang} setLang={setLang} className="lrr:px-2 lrr:min-h-full min-h-[65vh]" />
            {/* section 3 */}
            <SectionThree lang={lang} setLang={setLang} className="lrr:px-2 lrr:min-h-full min-h-[65vh]" />
            {/* section 4 */}
            <SectionFour lang={lang} setLang={setLang} className="lrr:px-2 lrr:min-h-full min-h-[65vh]" />
            {/* section 5 */}
            <SectionFive lang={lang} setLang={setLang} className="lrr:px-2 lrr:min-h-full min-h-[0vh]" />
            {
            /**
             * section 6
             * !note: section 6 is empty, so there is not any benefit to include it, section 6 has been commented so the developer knows that there is a extra section if you want to a section.
             */
            }
            {/* <SectionSex lang={lang} setLang={setLang} className="lrr:px-2 lrr:min-h-full min-h-[0vh]" /> */}
            {/* Footer */}
            <Footer lang={lang} setLang={setLang} className="" />

        </div>
    );
}


export default Ramadan;

// 1648846800000
/**
 *Ramadan is the ninth month of
Islamic calendar,
and it's the second pillar of Islam and lasts twenty-nine to thirty days,
It is a month of fasting, where Muslims fast from dawn to sunset and it's fard (obligatory) for all adult Muslims, Ramadan is famous where people fast and pray "Al-Taraweeh" prayer.
it is known that people must do this to feel how poor people live with no food. at the end of Ramadan people must give charity to poor ones, Ramadan also known with it's traditional food and juice, like Vimto. also in Ramadan The spiritual rewards (thawab) of fasting and The other  worships are multiplied during Ramadan, and this why the majority of people plan to read The wholy quran in this month and gain the reward (thawab).
 */
/**
 * Let’s keep it simple:
You can use the files on our site for personal use as a free member so long as you provide attribution. Attribution is preferred in the form of a link to www.freevector.com. You can pretty much do anything with the vectors - feel free to modify, alter, remix or combine them with other files, just as long as you give us credit for the work we helped you with in your personal projects :) If you want to use the files commercially, you'll need to become a premium member to do so. Thanks!
 */