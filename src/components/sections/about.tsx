import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";

const AboutSection = () => {
  return (
    <SectionWrapper id="about" className="mx-auto max-w-7xl px-4 py-24">
      <SectionHeader
        id="about"
        title="About Me"
        desc="A quick overview of my background, education, and achievements."
        className="static mb-14"
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/70 dark:bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground leading-relaxed">
            Innovative IT Executive with a strong background in networking and
            technical support. Recognized for exceptional debugging skills and
            the ability to resolve complex software issues, driving continuous
            improvement in IT services.
          </CardContent>
        </Card>

        <Card className="bg-white/70 dark:bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">
                Bachelor of Technology in Computer Science and Engineering
              </p>
              <p>Lovely Professional University — Phagwara, Punjab</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">
                Diploma in Computer Science and Engineering
              </p>
              <p>Lovely Professional University — Phagwara, Punjab</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Secondary Education</p>
              <p>B.S.M SR Secondary School — Gurugram, Haryana</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/70 dark:bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Achievements & Activities</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <ul className="list-disc space-y-2 pl-5">
              <li>Managing Director Award T130.</li>
              <li>Represented Haryana at National Level — 3 times.</li>
              <li>Currently playing in the Delhi League for Delhi United FC.</li>
              <li>Competed at State, National & League levels in football.</li>
              <li>Participated in CyberSec Symposium 2.0, April 1–3, 2024.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/70 dark:bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Course & Languages</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Course</p>
              <p>Learning And Communication Skills — TCS iON Digital Learning Hub (2023)</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Languages</p>
              <p>English · Hindi</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
