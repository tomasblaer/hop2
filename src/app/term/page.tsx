import { Footer } from "@/components/footer/footer";
import Header from "@/components/nav/header";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Term() {
    return (
      <>
        <Header />
        <WavyBackground>
          <main className="">
          <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               1. Skilningur á þjónustu: Þessir skilmálar bæta skilning notanda á því að vefsíðan aðeins heldur utan um vörutal annarra fyrirtækja og að hún er ekki tengd við eða eigandi vörumerkja eða fyrirtækja sem sýna vörurnar.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               2. Ábyrgð og tryggingar: Skilmálarnir geta útskýrt að vefstjórnandi eigi ekki ábyrgð á gæðum eða öðrum þáttum tengdum vörutölunum, og að notendur nota þær á eigin ábyrgð.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               3. Eigindómur: Tilgreina má að öll réttindi á eigindómi eða vörumerki sem sýnt er á vefsíðunni eru eign þeirra eigenda.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               4. Notkunargildi: Skilmálarnir gætu innihaldið ákvæði sem takmarka notkun notenda á upplýsingum á vefsíðunni og skilgreina hvort og hvernig þær mega endurnota efni eða upplýsingar sem eru á síðunni.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               5. Ábyrgð: Aðgreina ábyrgð vefstjórnanda fyrir innihald vefsíðunnar og ábyrgð þriðju aðila sem framkvæmir vörutölurnar.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               6. Tilvísun á þriðja aðila: Gæti verið ályktun sem leiðir notendur á vefsíðuna til að lesa skilmálana og þær stofnanir sem sýna vörurnar.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               7. Breytingar og uppfærslur: Skilmálar ættu að taka með í huga möguleika á breytingum og uppfærslum, og hvernig slíkar breytingar verða tilkynntar notendum.<br />
            </div>
          </main>
        </WavyBackground>
        <Footer />
      </>
    );
  }
  