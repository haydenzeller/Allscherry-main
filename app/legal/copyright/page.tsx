import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PageTitle from "@/app/components/PageTitle";

export default function Copywrite() {
    return (
    <main  className="flex flex-col bg-base-100 max-w-svw">
        <Header />
        <PageTitle title={"Copyright"}/>
        <section className="items-center justify-center gap-3 flex flex-col m-5">
            <p>Last updated: June 2, 2024</p>
            <div className=" text-left bg-base-200 rounded-box m-1 p-2 text-black">
                <h1 className="text-2xl text-center">Tldr;</h1>
                <h2 className="text-lg">Source Code:</h2>
                <p>
                    Free to use as you please.
                </p>
                <br/>
                <h2 className="text-lg">Images and Branding:</h2>
                <p>
                    Don&apos;t steal.
                </p>
                <br/>
                <p>
                    © Allscherry. All rights reserved.
                </p>
            </div>
            <p>
                    Copyright (c) 2024 Hayden Zeller, Eric Olcsvary
            </p>
            <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the &quot;Software&quot;), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
            </p>

            <p>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
            </p>

            <p>
                The following assets, including but not limited to brand names, logos, and images
                (collectively, the &quot;Brand Assets&quot;), included in this project are not covered under
                this MIT License. The Brand Assets are protected by copyright and trademark laws
                and are licensed under the Creative Commons Attribution-NonCommercial 4.0 International
                License. You may use these Brand Assets according to the terms of the Creative Commons
                license, which can be found at <a target="_blank" href="https://creativecommons.org/licenses/by-nc/4.0/" className="text-base-200">https://creativecommons.org/licenses/by-nc/4.0/</a>.
            </p>

            <p>
                THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            </p>        
        </section>
        <Footer />
    </main>
    );
}

