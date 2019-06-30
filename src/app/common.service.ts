import { Injectable } from '@angular/core';
import { Subject, TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public selectedTemplate: any = null;
   public totalTime: number = 0;
  public templates: any[];
  public sections: any[];
  divideRule: any[] = [[0.1, 0.4, 0.4, 0.1], [0.1, 0.2, 0.2, 0.25, 0.25]];
  selectedSectionId: any;
  constructor(
  ) {
    this.sections = [
      { id: 0, sectionName: 'Hook', recommendedChars: 67, 
        description: `✎ Click to write. Make a catchy start to get your audience's interest and prepare for the important pitch about your cause.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: 'https://blog.pitcherific.com/da/fang-dit-publikum-lav-et-faengende-hook/'
      },
      { id: 1, sectionName: 'Problem', recommendedChars: 157, 
        description: `✎ Click to write. Describe the specific problem, need or cause you are concerned about. What is the current situation and which people or organisations are involved? Why is this situation important to work with?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `http://paulgraham.com/startupideas.html`
      },
      { id: 2, sectionName: 'Solution', recommendedChars: 157, 
        description: `✎ Click to write. What are your approach to the situation? How will you solve the problem, cover the need or work with your cause? Explain how your approach is different and better than other existing solutions?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 3, sectionName: 'Close', recommendedChars: 67, 
        description: `✎ Click to write. Tell about the status and your next steps. Depending on your goal for pitching in the first place (e.g. a contact or a meeting), ask the person your are pitching to about it and tell what it will mean to you, to get it.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },

      { id: 4, sectionName: 'Hook', recommendedChars: 90, 
        description: `✎ 'Well begun is half done' is a famous saying. Make a catchy start to get your audience's interest and prepare for the important pitch about your venture.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 5, sectionName: 'Need', recommendedChars: 270, 
        description: `✎ Describe a specific situation in which a specific customer is experiencing a specific problem or need. Try also to clarify the reason why the customer is experiencing the problem.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 6, sectionName: 'Approach', recommendedChars: 180, 
        description: `✎ Explain how you solve the customers' problem. By which product and underlying magic is your solution created? Explain too, how you expect to make earnings on your idea. Who will pay for what?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 7, sectionName: 'Benefit', recommendedChars: 180, 
        description: `✎ Identify the great benefits your customers get from using this solution. What value do you offer, that nobody else does?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 8, sectionName: 'Competition', recommendedChars: 90, 
        description: `✎ Identify the most obvious competitor(s) to your solution and compare how you solution differ from theirs?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 9, sectionName: 'Close', recommendedChars: 90, 
        description: `✎ A strong finish will make the pitch or a specific message still standing after the presenter left the stage. The outro could be a one-line wrap-up of your venture`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },

      { id: 10, sectionName: 'My company...', recommendedChars: 29, 
        description: `✎ name of your company`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 11, sectionName: '... develops/sells...', recommendedChars: 45, 
        description: `✎ a defined product`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 12, sectionName: '... which helps...', recommendedChars: 29, 
        description: `✎ a defined audience`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 13, sectionName: '... with...', recommendedChars: 76, 
        description: `✎ solving a problem`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 14, sectionName: '... through...', recommendedChars: 45, 
        description: `✎ a unique solution`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },

      { id: 15, sectionName: 'Slide', recommendedChars: 300, 
        description: `✎`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },

      { id: 16, sectionName: 'Why are you passionate about your idea?', recommendedChars: 594, 
        description: `✎ We want to hear why you work on your idea. Are you dreaming about solving a problem you have had yourself? Do you want to improve the lives of a specific group of people? What are you dreaming of achieving? What is your “why”?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 17, sectionName: 'What keeps you going when you feel hardship?', recommendedChars: 594, 
        description: `✎ We want to hear where you find your optimism, energy and drive? When you meet hardship, when the world do not believe in your innovative idea? When the days become unreasonably long?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 18, sectionName: `What've you already done, and what will you sacrifice?`, recommendedChars: 594, 
        description: `✎ We want to hear what you have sacrificed, what you have done in hard times and what you are willing to do in the future, to achieve the growth you deserve?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },

      { id: 19, sectionName: 'Hook', recommendedChars: 45, 
        description: `✎ 'Well begun is half done' is a famous saying. Make a catchy start to grab your audience's interest and prepare for the important pitch about your venture.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 20, sectionName: 'Need, Customer & Market', recommendedChars: 135, 
        description: `✎ Innovations are based on real problems and needs, experienced by real people. The better you are able to define and analyze the problem and your potential customers, the better the chances for success with your solution.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 21, sectionName: 'Value Proposition & Key Activities', recommendedChars: 225, 
        description: `✎ The value proposition is the solution to a problem or the fulfilling of a need. It is about 'what' unique thing and value you offer, 'how' it is unique but also 'how' it is made, which key activities you need to get it running and what resources and partnerships you need for this process.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 22, sectionName: 'Revenue Stream & Budget', recommendedChars: 90, 
        description: `✎ Revenue streams and costs are what makes a budget and shows if the startup is financially sustainable. The central question though is 'who will pay for what'?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 23, sectionName: 'Distribution, Sales & Marketing', recommendedChars: 45, 
        description: `✎ It will not be enough to have a great product, you also need to bring it to the customers. What marketing acts will make your product known and through which channels will you reach your customers?`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 24, sectionName: 'Competitive Advantages', recommendedChars: 45, 
        description: `✎ It's always a good idea to know what alternatives to your product you are up against. With attention you can learn which good ideas from your competitiors to integrate in your own venture and how to differentiate from them in other perspectives.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 25, sectionName: 'Customer Validation & Prototype', recommendedChars: 45, 
        description: `✎ A well described concept is one thing, but to have it (or parts of it) validated is so much more. This criteria is about getting proof that what you have planned will actually be worthwhile to live out, especially indicators of the customers needs and willingness to buy your product.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 26, sectionName: 'Progress & Roll-out Strategy', recommendedChars: 135, 
        description: `✎ With Startup Weekend being a 54 hour process with several people working on the venture, there is a good chance that teams could produce a first prototype or even a minimum viable product to showcase as a demo. In addition it is important to lay out the next steps for the team's venture.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 27, sectionName: 'Team, Skills & Organization', recommendedChars: 90, 
        description: `✎ It's nice to know which people are working with the venture and it's important to know with which skills and which organisation the execution of the concept will be handled.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
      { id: 28, sectionName: 'Close', recommendedChars: 45, 
        description: `✎ A strong finish will make the pitch or a specific message memorable even after the presenter left the stage. The outro could be be a one-line wrap-up of your venture, along with a specific call-to-action.`,
        example:`Beer.... Everybody loves it, right? –––––––––––PAUSE 2s–––––––––––  Wrong [pour out] It&#39;s bland, boring... it&#39;s like a colored water with added bitterness. So no, not everyone likes a BAD beer –––––––––––PAUSE 2s–––––––––––`,
        inspired: `Read Paul Graham&#39;s essay on &#39;How to Get Startup Ideas&#39;`
      },
    ]
    this.templates = [
      { id: 0, name: `Elevator Pitch`, timeLimit: 90, freeTimeLimit: 150,  maxTimeLimit: 300, timeLimitSpep: 30, sections: [this.sections[0], this.sections[1], this.sections[2], this.sections[3]] },
      { id: 1, name: `NABC Pitch`, timeLimit: 90, freeTimeLimit: 150,  maxTimeLimit: 300, timeLimitSpep: 30, sections: [this.sections[4], this.sections[5], this.sections[6], this.sections[7], this.sections[8], this.sections[9]] },
      { id: 2, name: `One Sentence Pitch`, timeLimit: 90, freeTimeLimit: 150,  maxTimeLimit: 300, timeLimitSpep: 30, sections: [this.sections[10], this.sections[11], this.sections[12], this.sections[13], this.sections[14]] },
      { id: 3, name: `Pecha Kucha`, timeLimit: 90, freeTimeLimit: 150,  maxTimeLimit: 300, timeLimitSpep: 30, sections: [this.sections[15]]},
      { id: 4, name: `WeLoveStartups`, timeLimit: 90, freeTimeLimit: 150,  maxTimeLimit: 300, timeLimitSpep: 30, sections: [this.sections[16], this.sections[17], this.sections[18] ] },
      { id: 5, name: `Startup Weekend`, timeLimit: 90, freeTimeLimit: 150,  maxTimeLimit: 300, timeLimitSpep: 30, sections: [this.sections[19], this.sections[20], this.sections[21], this.sections[22], this.sections[23], this.sections[24], this.sections[25], this.sections[26], this.sections[27], this.sections[28]] }
    ]
    this.selectTemplate(0);
  }

  selectTemplate(templateId) {
    this.selectedTemplate = this.templates[templateId];
    this.selectedTemplate.timeLimitOptions = [];
    for(var i = 1; ; i++) {
      var timeTemp = this.selectedTemplate.timeLimitSpep * i;
      if (timeTemp > this.selectedTemplate.maxTimeLimit) {
        break;
      } else {
        var temp = '' + Math.floor(timeTemp/60) + ':' + timeTemp%60 + (timeTemp >= 60? ' min.': ' sec.');
        if(timeTemp <= this.selectedTemplate.freeTimeLimit) {
          var option = {name: temp, value: timeTemp, freeFlag: true};
        } else {
          var option = {name: temp, value: timeTemp, freeFlag: false};
        }
        if(timeTemp == this.selectedTemplate.timeLimit) {
          this.selectedTemplate.selectedOption = option;
        }
      }
      this.selectedTemplate.timeLimitOptions.push(option)
    }

    for( var key in this.selectedTemplate.sections) {
      this.selectedTemplate.sections[key].content = '';
      if(this.selectedTemplate.sections.length == 4) {
        this.selectedTemplate.sections[key].recommendedChars = 15 * this.selectedTemplate.timeLimit * this.divideRule[0][key];
      } else if(this.selectedTemplate.sections.length == 5) {
        this.selectedTemplate.sections[key].recommendedChars = 15 * this.selectedTemplate.timeLimit * this.divideRule[1][key]
      } else {
        this.selectedTemplate.sections[key].recommendedChars = Math.floor(15 * this.selectedTemplate.timeLimit / this.selectedTemplate.sections.length);
      }
    }
  }

  selectTimeLimit(option) {
    if(option.value > this.selectedTemplate.freeTimeLimit) {
      console.log('not free');
    } else {
      this.selectedTemplate.selectedOption = option;
      this.selectedTemplate.timeLimit = option.value;
    }

    for( var key in this.selectedTemplate.sections) {
      this.selectedTemplate.sections[key].content = '';
      if(this.selectedTemplate.sections.length == 4) {
        this.selectedTemplate.sections[key].recommendedChars = 15 * this.selectedTemplate.timeLimit * this.divideRule[0][key];
      } else if(this.selectedTemplate.sections.length == 5) {
        this.selectedTemplate.sections[key].recommendedChars = 15 * this.selectedTemplate.timeLimit * this.divideRule[1][key]
      } else {
        this.selectedTemplate.sections[key].recommendedChars = Math.floor(15 * this.selectedTemplate.timeLimit / this.selectedTemplate.sections.length);
      }
    }
  }
  changeContent(event) {
    var totalLenth = 0;
    for(var element of this.selectedTemplate.sections) {
      totalLenth += element.content.length;
    }
    this.totalTime = Math.floor(totalLenth / 15);
  }
}
