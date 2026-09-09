import Image from "next/image";
import { Award, Medal, Trophy, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" className="mx-auto max-w-7xl px-4 py-24">
      <SectionHeader
        id="achievements"
        title="Achievements & Certificates"
        desc="Sports achievements, certifications, awards, and a visual collection of accomplishments."
        className="static mb-14"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="overflow-hidden bg-white/70 dark:bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Sports & Football
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <Medal className="mb-2 h-5 w-5" />
                <p className="font-semibold text-foreground">3× National Level</p>
                <p className="text-sm text-muted-foreground">Represented Haryana</p>
              </div>
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <Trophy className="mb-2 h-5 w-5" />
                <p className="font-semibold text-foreground">Delhi League</p>
                <p className="text-sm text-muted-foreground">Delhi United FC</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Competed at State, National, and League levels in football.</li>
              <li>Represented Haryana at the National Level three times.</li>
              <li>Currently playing in the Delhi League for Delhi United FC.</li>
              <li>Received the Managing Director Award T130.</li>
            </ul>
            <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
              <Image
                src="/assets/portfolio/certificate-collection.jpg"
                alt="Collection of sports and achievement certificates"
                width={1536}
                height={2048}
                className="h-auto max-h-[620px] w-full object-cover object-top"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Sports, school, competition, and achievement certificates collected over the years.
            </p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden bg-white/70 dark:bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-start gap-3 rounded-xl border border-border bg-background/60 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">CyberSec Symposium 2.0</p>
                <p className="text-sm text-muted-foreground">
                  Certificate of Participation · April 1–3, 2024 · Lovely Professional University
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-muted/20">
              <Image
                src="/assets/portfolio/cybersec-symposium-certificate.jpg"
                alt="CyberSec Symposium 2.0 certificate of participation"
                width={2048}
                height={1448}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="rounded-xl border border-border bg-background/60 p-4">
              <p className="font-semibold text-foreground">Learning & Communication Skills</p>
              <p className="text-sm text-muted-foreground">
                TCS iON Digital Learning Hub · 2023
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This section brings the professional certification together with the
              wider collection of sports, academic, competition, and appreciation
              certificates to present the full achievement portfolio.
            </p>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
