import React from "react";
import NavBar from "../components/nav-bar";
import "../styles/times-new-roman.css";
import "../styles/project-name.css";
import ViewerWomanhood from "../components/viewerWomanhood";
import mindMap1 from "../assets/womanhood/womanhood-starting-points-1.png";
import "../styles/womanhoodComp.css";
import WomanhoodComp2 from "../components/womanhoodComp2";
import WomanhoodComp3 from "../components/womanhoodComp3";
import WomanhoodComp4 from "../components/womanhoodComp4";
import mindMap2 from "../assets/womanhood/another-map.png";
import WomanhoodComp6 from "../components/womanhoodComp6";
import WomanhoodComp8 from "../components/womanhoodComp8";
import WomanhoodComp9 from "../components/womanhoodComp9";
import WomanhoodComp10 from "../components/womanhoodComp10";
import WomanhoodComp11 from "../components/womanhoodComp11";
import WomanhoodComp12 from "../components/womanhoodComp12";
import WomanhoodComp14 from "../components/womanhoodComp14";
import WomanhoodComp15 from "../components/womanhoodComp15";

// 1: mind map
// 2: texts
// 3: images (many)
// 4: text with two images
// 5: mind map for imagery used in prints
// 6: life drawing
// 7: text on presentation
// 8: three black n white images
// 9: three red images
// 10: four prints
// 11: another four images
// 12: text with one example image "Do not abandon me"   -----> truksta paveiksliuko
// 13: two paragraphs of text and the three following prints and then the last third paragraph of text and two Marlene Dumas works -----> truksta paveiksliuko
// 14: text and water color images and then the last piece of text
// 15: the small text of getting into the print room and the three images
// 16: reflection text

function Womanhood() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xxl-2">
          <NavBar />
        </div>
        <div className="col-xxl-8">
          <ViewerWomanhood
            composition1={
              <div className="mind-map">
                <img src={mindMap1} alt="Mind Map 1" />
                <p className="image-description times-new-roman black">
                  Starting mind map{" "}
                </p>
              </div>
            }
            composition2={<WomanhoodComp2 />}
            composition3={<WomanhoodComp3 />}
            composition4={<WomanhoodComp4 />}
            composition5={
              <div className="mind-map">
                <img
                  src={mindMap2}
                  alt="Mind Map 2"
                  style={{ marginBottom: "-40px" }}
                />
                <p className="image-description times-new-roman black">
                  Mind map for imagery used in prints{" "}
                </p>
              </div>
            }
            composition6={<WomanhoodComp6 />}
            composition7={
              <div className="womanhood-7-3">
                <div className="padding-womanhood times-new-roman">
                  <a
                    href="https://docs.google.com/presentation/d/1rZHBxCStT1x1JZ5BbWboeYcxa7YSCuEU9bknt1Qskxs/edit?usp=sharing"
                    target="_blank"
                  >
                    Link to the presentation
                  </a>
                </div>
                <p className="main-text times-new-roman">
                  {" "}
                  <br></br> <br></br>
                  Presenting my Pecha Kucha went well. I got all my research
                  forward clearly and got some good feedback. One piece of
                  insight I received was that I should not only be using
                  information from the event that was the stimulus of my work,
                  but carry on keeping up with current events, changes in laws
                  and use questionnaires to get other insights. I have done this
                  by having conversations regarding gender and womanhood with my
                  peers. I have found that many have similar opinions to me that
                  they may not have expressed before and with this shared
                  attitude, experiences of everyday sexism have been comfortably
                  shared that I can take on bored whilst discussing women’s
                  lives in my work. However, as to keeping up with changes in
                  law, there has been not nearly enough sound after the vigils
                  and it seems that yet again, women’s lives are just as
                  undervalued as before. <br></br> I also received a question
                  after presenting my pecha kucha which was, where are the
                  symbols that I have used coming from? I thought that I should
                  be doing extra work into the history of symbols and possibly
                  their origin however, their presence in everyday life is so
                  massive yet unconscious that I feel they speak for themselves
                  and the interpretation of each symbol is part of what I want
                  my work to stand for; such as with Georgia O’Keefe’s work in
                  which there was speculation of her painting female genitalia.
                  <br></br>Listening to others present their pecha kuchas was
                  also a vital part of my research. A lot of others had explored
                  similar topics and others had interesting ways of working. I
                  took notes on their presentations and plan on bringing in
                  elements of their work. For example, someone who’s topic
                  surrounded children’s art used a specific colour palette,
                  primary and bright non- gendered colours, to emulate the
                  colours that children are attracted to and surrounded by. They
                  also touched on the thought of drawing just for the sake of
                  drawing, which children do so much and so naturally, usually
                  until they start school. Someone else used a lot of scientific
                  imagery in their work, such as the eye and microscopic images.
                  I took some inspiration from this and have been looking at
                  diagrams used in sex education in schools and have used some
                  of these shapes in recent monotypes. The technique of
                  'frottage' was also mentioned in the context of Max Ernst's
                  work. He struggled with the blank canvas and instead started
                  to use rubbings and then his imagination to create art from
                  the shapes found. I would like to draw on this technique to
                  create pieces out of the monotypes I have done that have not
                  come out exactly as I wanted but still have potential of being
                  something.{" "}
                </p>
              </div>
            }
            composition8={<WomanhoodComp8 />}
            composition9={<WomanhoodComp9 />}
            composition10={<WomanhoodComp10 />}
            composition11={<WomanhoodComp11 />}
            composition12={<WomanhoodComp12 />}
            composition13={"Composition 13"}
            composition14={<WomanhoodComp14 />}
            composition15={<WomanhoodComp15 />}
            composition16={
              <div className="womanhood-7-3" style={{ paddingTop: "60px" }}>
                <p className="main-text times-new-roman">
                  On reflecting on my time during my FMP, I feel my work has
                  been successful. I have tackled complex, controversial and
                  deep topics throughout Womanhood such as the root of the
                  patriarchy, the male gaze and the reduction of women to the
                  body. It has been a challenging process; especially as I aimed
                  to create work that was impactful to every audience. Listening
                  to feedback has ensured I have done this. <br></br> An example
                  of group discussions leading to progress in my work is when I
                  presented my first triptych of prints and was met with
                  confusion. The irony of my work was misunderstood and I was
                  told I had ‘tunnel vision’ to only associate women with
                  pregnancy. This was where the confusion lay as this was the
                  exact thing I was representing in my work that I see in the
                  patriarchal society. I was disheartened by this however,
                  receiving this feedback forced me to move forward into not
                  only the root cause of the turmoils of womanhood but look into
                  how these root causes have affected everyday life in a more
                  obvious sense. I made my work more provocative and shocking to
                  do this, as my main aim was to create a body of work that
                  invokes emotions on the audience. Another challenge I met on
                  the course was time management. Fine art sessions had been
                  changed from Friday to Wednesday afternoon. I have a part time
                  job as well as my studies and had said before the change that
                  Friday was the day I would not come in. This meant I was
                  working for a lot of the Wednesday sessions and I could not
                  get out of this schedule for a month, by the time the course
                  would be over. I missed a lot of important discussion and
                  group feedback, including the peer assessment session. This
                  has on the other hand, forced me to be more self directed and
                  be keen to ask for feedback whenever I can. <br></br> I have
                  been successful in tackling my aim to create a series of work.
                  However, if I were to carry on this project to create a final
                  piece and have a show, I would most likely tackle the concept
                  of gender more strongly. I have of course touched on it in
                  Womanhood as that is inevitable. In my Pecha Kucha I
                  researched some artists that looked into gender as their
                  topic, Jes Fan for example. I think it is also a topical
                  subject with the recent awareness of gender fluidity, pronoun
                  choice, neo-pronouns and the transgender community, which is
                  sometimes met with disdain. I would like to define the concept
                  of gender and explore its complexities. <br></br> Considering
                  how I would present my art in a gallery is interesting. I
                  would want a large room inside a gallery which was not a
                  square but rather you would have to walk through it. This
                  would give time for the audience to not just glimpse over some
                  pieces more than others but be so engaged they are swept
                  through to the end room. I would want this room to be small
                  and have all four walls covered with my A4 black and yellow
                  prints. It would create an experience of imagery associated
                  with Womanhood and become this sanctuary of female experience;
                  which could either prove a challenging place or a safe space.
                  I would want all my work to be framed simply. With large white
                  borders and thick cream wooden frames. I want the eye to be
                  drawn to the details of the work and not distracted by
                  anything else. I am pleased with my work and would love to
                  have been able to create a final piece and expand on the FMP.
                </p>
              </div>
            }
          />
        </div>
        <div className="col-xxl-2 times-new-roman project-name">womanhood</div>
      </div>
    </div>
  );
}

export default Womanhood;
