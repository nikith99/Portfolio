"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { aboutData } from "@/data/about";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";

interface BentoGridItemProps {
  name: string;
  icon: string;
  className?: string;
}

const BentoGridItem = ({ name, icon, className }: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background/50 p-4 backdrop-blur transition-all hover:bg-background/60",
        className
      )}
    >
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-lg bg-background/50 backdrop-blur">
        <img src={icon} alt={name} className="h-8 w-8" />
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm font-medium">{name}</p>
      </div>
    </div>
  );
};

const About = () => {
  const [activeSection, setActiveSection] = useState<
    "experience" | "education"
  >("experience");

  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-purple-900/20 to-transparent dark:from-purple-900/40" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-center text-3xl font-bold">About Me</h2>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mx-auto max-w-3xl space-y-4">
            {aboutData.introduction.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            {/* Key Achievements Section */}
            <div className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-background/50 p-6 backdrop-blur">
                  <h4 className="mb-4 text-xl font-semibold">
                    Recent Highlights
                  </h4>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    {aboutData.highlights.recent.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-lg bg-background/50 p-6 backdrop-blur">
                  <h4 className="mb-4 text-xl font-semibold">
                    Academic Achievements
                  </h4>
                  <ul className="space-y-2 text-left text-muted-foreground">
                    {aboutData.highlights.academic.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Collaboration Statement */}
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground font-semibold">
              {aboutData.introduction.collaboration}
            </p>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-semibold">Skills</h3>
          <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {aboutData.skills.map((skill) => (
              <BentoGridItem
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>

        {/* New Toggle Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="inline-flex rounded-lg border p-1 bg-background/50 backdrop-blur">
            <Button
              variant={activeSection === "experience" ? "default" : "ghost"}
              className="relative px-6"
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </Button>
            <Button
              variant={activeSection === "education" ? "default" : "ghost"}
              className="relative px-6"
              onClick={() => setActiveSection("education")}
            >
              Education
            </Button>
          </div>
        </div>

        {/* Updated Experience & Education Section */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {activeSection === "experience" ? (
              experienceData.experience.map((item, index) => (
                <Card
                  key={index}
                  className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.duration}
                    </p>
                    <div className="mt-4 space-y-2">
                      {item.responsibilities.map((responsibility, i) => (
                        <p key={i} className="text-sm text-muted-foreground">
                          • {responsibility}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <>
                <h3 className="mb-6 text-xl font-semibold">Education</h3>
                <div className="space-y-4">
                  {educationData.education.map((item, index) => (
                    <Card
                      key={index}
                      className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{item.degree}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{item.school}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.duration}
                        </p>
                        {item.achievements.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <p
                                key={i}
                                className="text-sm text-muted-foreground"
                              >
                                • {achievement}
                              </p>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <h3 className="mb-6 mt-8 text-xl font-semibold">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {educationData.certifications.map((cert, index) => (
                    <Card
                      key={index}
                      className="border-none bg-background/50 dark:bg-background/20 shadow-xl backdrop-blur transition-all hover:bg-background/60"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl">{cert.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-medium">{cert.organization}</p>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuedDate}
                        </p>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {cert.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
