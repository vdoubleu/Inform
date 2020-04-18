import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
    

class Article extends Component {
   constructor(props){
      super(props);
      this.state = {
         articles: ""
      }
   }

   componentDidMount() {
   }

   render() {
      return (
         <div class="card">
            <div class="card-body">
               <h1> Hello World </h1>
               <p1> Prime Minister Justin Trudeau says Canada and the United States have struck a deal to extend current border restrictions between the two countries by an additional 30 days.

"This is an important decision and one that will keep people on both sides of the border safe," Trudeau said at the top of his daily COVID-19 briefing Saturday.

The border was originally closed March 21, restricting non-essential travel between Canada and the U.S. Over the past month, the border remained open for trade and commerce, with exemptions also granted for emergency response and public health purposes.

The prime minister's announcement comes as the initial agreement was set to expire Tuesday. 

Trudeau thanked Public Safety Minister Bill Blair for his work leading discussions with U.S. officials about extending the measures.

"It's another example of the excellent collaboration between our two countries," he said.

The announcement is in line with the prime minister's comments from earlier this week, when Trudeau said Thursday that reopening the U.S.-Canada border would not be happening "anytime soon."
         Trudeau also revealed $306 million in funding toward Indigenous businesses is on its way for those struggling amid the COVID-19 pandemic.

Earlier this week, some politicians took to social media calling for specific support aimed at Indigenous businesses.

Conservative Indigenous Services critic Gary Vidal penned a letter to Finance Minister Bill Morneau Wednesday highlighting that some First Nations businesses don't qualify for the federal government's wage subsidy program.

"The effect of the COVID-19 crisis on these companies is even more significant than those in the general economy. First Nations businesses already face greater hurdles than most," Vidal wrote, asking that the Canada Emergency Wage Subsidy (CEWS) be expanded to include such businesses.</p1>
            </div>
         </div>
      )
   }
}


export default Article;

