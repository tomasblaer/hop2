import { Footer } from "@/components/footer/footer";
import Header from "@/components/nav/header";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Privacy() {
    return (
      <>
        <Header />
        <WavyBackground>
          <main className="">
          <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               1. Söfnun og notkun á upplýsingum: Útskýra hvaða tegundir af persónuupplýsingum verða safnaðar, hvernig þær verða notuðar og til hvaða tilgangs. </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               2. Löglegt grunnlag: Skýra hvaða löglegt grunnlag er notað til að safna og vinna úr persónuupplýsingum. Tilgreina hvort samþykki notenda sé nauðsynlegt og hvernig það er aflað.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               3. Aðgangur að persónuupplýsingum: Tilgreina réttindi notenda varðandi aðgang að þeirra eigin persónuupplýsingum, eins og rétt til að fá upplýsingar um hvaða upplýsingar eru geymdar og hvernig þær eru notaðar.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               4. Öryggi: Tryggja að viðeigandi öryggi sé í stað til að vernda persónuupplýsingar gegn ólöglegri aðgangi, breytingu eða eyðingu.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               5. Upplýsingaútlit: Skýra hvaða þriðji aðilar hafa aðgang að persónuupplýsingum notenda, hvort þær verði deildar með öðrum fyrirtækjum og hverjar eru skipanir fyrir að deila upplýsingum.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               6. Hægt aðgangur: Styttra má bera á það að notendum sé boðið að fá aðgang að persónuupplýsingum sínum í einfaldri og skýrri formi, t.d. með skráningu á notendaúttektarstað.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               7. Samþykki: Tryggja að notendum sé boðið um að samþykkja notkun á persónuupplýsingum sínum á skýran og skýran hátt, og að þeir hafi möguleika á að afturkalla samþykki sitt.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               8. Breytingar á stefnu: Upplýsa notendur um mögulegar breytingar á persónuverndarstefnu og hvernig þær verða tilkynntar.<br />
            </div>
            <div
              className=
                "hover:scale-110 transition duration-300 text-sm md:text-sm bg-gradient-to-r from-red-700 to-rose-500 text-white mt-4 max-w-xs md:max-w-2xl text-center mx-auto p-2 rounded-md w-fit">
               9. Hæfniveitingar: Upplýsa notendur um réttindi þeirra til að klaga til viðeigandi stjórnvalda ef þeir telja að persónuverndarreglur ekki séu fylgt.<br />
            </div>
          </main>
        </WavyBackground>
        <Footer />
      </>
    );
  }
  