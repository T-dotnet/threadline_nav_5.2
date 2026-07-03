import { Child } from './types';

export interface ChildData {
  home: {
    focusTitle: string;
    focusDescription: string;
    focusAction: string;
    timeline: {
      now: { title: string; meta: string; content: string };
      next: { title: string; meta: string; content: string };
      later: { title: string; meta: string; content: string };
    };
    emerging: { title: string; description: string };
  };
  understanding: {
    description: string;
    focusAreas: { title: string; description: string; sources: string[] }[];
  };
  priorities: {
    description: string;
  };
}

export const getChildData = (child: Child): ChildData => {
  if (child.name === 'Liam' || child.name === 'Leo' || child.name === 'Nick' || child.name === 'Noah') {
    const name = child.name;
    const isLeoOrNick = name === 'Leo' || name === 'Nick' || name === 'Noah';
    return {
      home: {
        focusTitle: isLeoOrNick ? 'Pathway selected' : 'Quarter plan complete',
        focusDescription: isLeoOrNick 
          ? (name === 'Nick'
              ? "Your telehealth assessment session with Dr. Naomi Clark is booked. Completing the preparation details gives Dr. Clark rich context."
              : "The pathway is chosen, but the Diagnostic Assessment hasn't started yet.")
          : 'Liam has achieved the goals for this quarter. The next Now, Next, and Later order will be set with the clinician after the next review session.',
        focusAction: isLeoOrNick ? (name === 'Nick' ? 'Prepare for your session' : 'Book appointment') : 'Prepare for the next review',
        timeline: {
          now: { 
            title: isLeoOrNick ? 'Diagnostic Assessment' : 'This quarter is complete', 
            meta: isLeoOrNick ? (name === 'Nick' ? 'Pathway active · Session booked' : 'Pathway active · Session pending') : '100% achieved · Maintenance active', 
            content: isLeoOrNick 
              ? (name === 'Nick'
                  ? "Nick is registered for the Diagnostic Assessment pathway. The telehealth assessment session with Dr. Naomi Clark is booked."
                  : "Leo is registered for the Diagnostic Assessment pathway. The next step is booking the telehealth assessment session.")
              : 'Liam has met the current plan goals. Keep the working routines steady while the review evidence is brought together.' 
          },
          next: { 
            title: isLeoOrNick ? (name === 'Nick' ? 'Attend assessment session' : 'Book assessment appointment') : 'Next review session', 
            meta: isLeoOrNick ? (name === 'Nick' ? 'Thu 26 Jun · Telehealth' : 'Action required') : '12 December · Clinician-led reset', 
            content: isLeoOrNick
              ? (name === 'Nick'
                  ? 'Your initial telehealth consultation and clinical assessment with Dr. Naomi Clark is booked for Thursday, 26 June.'
                  : 'Select a convenient time for the initial telehealth consultation and clinical assessment with Dr. Naomi Clark.')
              : 'The clinician will use the review to decide whether Liam needs a new Now priority, enrichment goals, or a lighter maintenance rhythm.' 
          },
          later: { 
            title: isLeoOrNick ? 'Clinical formulation' : 'New priority order', 
            meta: isLeoOrNick ? 'Following assessment' : 'Set after review · Not decided yet', 
            content: isLeoOrNick
              ? `After the session, a complete clinical formulation and quarter plan will be set up to target ${name}'s classroom focus.`
              : 'The next Now, Next, and Later sequence should not be assumed from the completed plan. It will be agreed after the review conversation.' 
          }
        },
        emerging: { 
          title: isLeoOrNick ? 'Baseline Observations' : 'Sustained Mastery', 
          description: isLeoOrNick
            ? `Use the everyday diary to note down what you notice about ${name}'s focus and energy levels before the clinical session.`
            : 'Liam continues to demonstrate high retention of co-regulation strategies in unstructured settings.' 
        }
      },
      understanding: {
        description: isLeoOrNick
          ? `${name} is a bright, imaginative child with warm family relationships. Preparing for the Diagnostic Assessment will help connect everyday life patterns with the clinical conversation.`
          : 'Liam has achieved all current developmental milestones. He is now demonstrating marked improvements in task persistence and creative depth, maintaining 100% goal alignment.',
        focusAreas: [
          { title: 'Self-Correction Mastery', description: `${name} identifies frustration triggers early and self-corrects without intervention in 90% of observed sessions.`, sources: ['You', 'Teacher', 'Clinician'] },
          { title: 'Task Endurance', description: `${name} can follow multi-step instructions and remain engaged in complex play for over 45 minutes.`, sources: ['You', 'Teacher'] }
        ]
      },
      priorities: {
        description: isLeoOrNick
          ? `${name}'s priority plan will be established together with the clinical team following the assessment session.`
          : 'Liam has met all core priorities for this quarter. The next priority order will be decided after the upcoming review session.'
      }
    };
  }
  
  if (child.name === 'Sophia') {
    return {
      home: {
        focusTitle: 'Executive function',
        focusDescription: 'This is the priority most likely to improve Sophia\'s day right now — it\'s affecting her ability to manage complex school assignments and reduces stress.',
        focusAction: 'Set up the visual assignment planner',
        timeline: {
          now: { title: 'Executive function', meta: 'High impact · started 3 weeks ago', content: 'Struggling with multi-step tasks is causing unnecessary anxiety.' },
          next: { title: 'Peer relationship navigation', meta: 'Moderate impact · prepare over coming months', content: 'Helping Sophia set healthy boundaries with peers is the natural next step.' },
          later: { title: 'Sleep routines', meta: 'Safe to wait · revisit at next review', content: 'Sleep is mostly stable, though occasional late nights studying should be monitored.' }
        },
        emerging: { title: 'Test anxiety', description: 'Sophia has mentioned feeling overwhelmed before assessments. We\'ll monitor this trend.' }
      },
      understanding: {
        description: 'Sophia is a thoughtful, observant child with a strong sense of justice. She is currently navigating the complexities of older peer group dynamics and managing academic pressures in a demanding year.',
        focusAreas: [
          { title: 'Executive Function', description: 'Sophia is mastering time management and organizational strategies for complex assignments, sometimes feeling overwhelmed by long-term projects.', sources: ['You', 'Teacher', 'Sophia'] },
          { title: 'Social Dynamics', description: 'Navigating peer relationships and building resilience against social pressures is a key area of focus for her emotional wellbeing.', sources: ['You', 'Sophia'] }
        ]
      },
      priorities: {
        description: 'We prioritize supporting Sophia\'s organizational confidence and social navigation, providing her with the frameworks to manage her schedule effectively and express her boundaries.'
      }
    };
  }

  // Default to Maya
  return {
    home: {
      focusTitle: 'Classroom attention',
      focusDescription: 'This is the priority most likely to improve Maya\'s day right now — it\'s affecting her learning and her confidence at school.',
      focusAction: 'Share the classroom strategy pack with Maya\'s teacher',
      timeline: {
        now: { title: 'Classroom attention', meta: 'High impact · clearest theme across every source', content: 'Trouble staying focused in class is currently the biggest drag on Maya\'s learning and self-confidence. Addressing it first tends to make other supports work better too.' },
        next: { title: 'Emotional regulation at home', meta: 'Moderate impact · prepare over coming months', content: 'Frustration around homework and changes in routine is real, and it is hard on home life. But it sits downstream of attention, so we expect it to ease as focus improves.' },
        later: { title: 'Friendships & social connection', meta: 'Safe to wait · currently a strength', content: 'Maya has warm, steady friendships and real empathy. This is going well, so it does not need your attention today.' }
      },
      emerging: { title: 'Sleep may start affecting focus', description: 'Recent check-ins suggest sleep could become a priority soon. Nothing to act on yet — we\'ll let you know if it does.' }
    },
    understanding: {
      description: 'Maya is a bright, imaginative child whose biggest challenge right now is staying focused in structured settings — and it\'s starting to affect her confidence at school. Her social and emotional foundations are strong.',
      focusAreas: [
        { title: 'Classroom Attention', description: 'Maya finds it hard to sustain focus in structured tasks, especially in the classroom. The pattern is consistent across settings and is the clearest theme in everything we\'ve gathered.', sources: ['You', 'Teacher', 'Clinician', 'Maya'] },
        { title: 'Social Emotional Resilience', description: 'Maya has warm, steady friendships and strong emotional awareness, which provides a great foundation to support her learning challenges.', sources: ['You', 'Maya'] }
      ]
    },
    priorities: {
      description: 'We don\'t hand you a list of everything. We rank what matters by its real impact on Maya — and show the reasoning behind every call.'
    }
  };
};
