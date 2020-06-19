import React from "react";

import { Centered, ConsentButton } from "meteor/empirica:core";

export default class Consent extends React.Component {
  render() {
    return (
      <Centered>
        <div className="consent">
          <h1 className="bp3-heading"> Consent Form </h1>
          <p className="bp3-ui-text">
            This experiment is part of a scientific project at the Wharton
            School, University of Pennsylvania. All participants must be 18
            years of age or older. If you are less than 18 years old, you cannot
            participate. Your decision to participate is entirely voluntary. You
            may choose to terminate your participation at any time and for any
            reason. There are no known or anticipated risks to participating in
            this experiment. We will not be collecting any sensitive information
            or personally identifiable information. We will be collecting your
            responses and behaviors throughout the experiment and all your
            interactions with our site. Our system will also automatically
            collect MTurk Worker IDs, which we need in order to compensate you
            for your participation. The Worker IDs will only be used for payment
            purposes. Once payments are processed and confirmed, Worker IDs will
            be deleted. Please read the following information about the
            experiment, compensation plan, and reasons for rejection. The
            results of our research may be presented at scientific meetings or
            published in scientific journals.
          </p>

          <h3 className="bp3-heading"> Details of Experiment and Tasks </h3>
          <p className="bp3-ui-text">
            In this experiment, you will be playing an online prediction game
            about speed dating, which we expect to take about 10-25 minutes. You
            will be provided with information about 10 couples that had met
            through speed dating and will be asked to guess whether or not they
            will want another date. Later in the game, you will be provided with
            an algorithm’s predictions for the same cases you made predictions
            for. You will then decide whether or not (and how much) to modify
            your prior predictions. You will also be answering some questions
            asking you to rate specific aspects of the game.
          </p>
          <p className="bp3-ui-text">
            At the end of the game, we will ask you whether there were any
            strategies you used for your predictions. You can respond by
            describing any strategies you used, but you are not required to
            answer this question. You will not receive any additional
            compensation for answering the question.
          </p>
          <p className="bp3-ui-text">
            We will disclose all information that we believe you would want to
            know in order to decide whether or not to participate in the study.
            However, for scientific reasons, we may include incomplete or
            inaccurate information about the nature of our research questions,
            hypotheses, data, and more. That said, you will be fully debriefed
            with accurate information once you have completed the study.
          </p>

          <h3 className="bp3-heading"> Details of Compensation </h3>
          <p className="bp3-ui-text">
            The experiment will involve attention checks (simple questions to
            gauge your attention throughout the game). If you pass a sufficient
            number of these checks you will be paid between $2 and $7 for your
            participation in the study. Within this range, your pay will be
            based on the accuracy of your final predictions (the ones made after
            seeing the algorithm’s predictions). We expect most participants to
            earn between $4-$5. We will approve the HIT within 3 days. If you
            are unable to pass a sufficient number of attention checks, you may
            be rejected from the experiment. Please be aware that if you are
            rejected this may show up on your account and could affect the
            future HITs you are able to take.
          </p>

          <h3 className="bp3-heading"> Researcher Contact Information: </h3>
          <p className="bp3-ui-text">
            Researcher’s Name and Email or Phone Number: Daehwan Ahn
            (ahndh@wharton.upenn.edu) Contact Information for the IRB at the
            University of Pennsylvania: 215.573.2540
          </p>

          <h3 className="bp3-heading">
            {" "}
            Clicking on the “I AGREE” button below indicates that you are at
            least 18 years of age, agree to participate voluntarily, and accept
            the terms of this consent form.{" "}
          </h3>

          <br/>
          <ConsentButton text="I AGREE"/>
        </div>
      </Centered>
    );
  }
}
