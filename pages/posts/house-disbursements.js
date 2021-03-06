import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import MyHeader from '../../components/MyHeader'
export default function HouseDisbursements() {
  return (
    <>
        <MyHeader />

      <article>
        <h2>Analysis of Q3 2020 House disbursements</h2>
        <h3>13 February 2021</h3>
        <p>
          The United States House of Representatives publishes data of its disbursements, basically the money it paid out to others. It gives a comprehensive picture of the workings of the House, so outsiders can see how the money is being put to work.</p>

        <p>  I analyzed the data from the third quarter of 2020. In the rest of this essay I share my findings.</p>

          <h4>Intern allowances</h4>

          <p>DC internships on and off Capitol Hill are often unpaid. Some offices, however, give some compensation in the form of stipends or even a small salary.</p>

          <p>During the third quarter of 2020 offices spent  $5,140,045 on what’s called “ intern allowances”, with a median of $3,716. The most spent by an office was $52,869. Surprising to me, the lowest amount spent by an office was -$2,700. I wonder how that happened.</p>

          <p>Below are the offices that spent the most money on intern allowances.</p>
          <Image
            src="/images/house_disbursements/intern_allowances_by_office_top_ten.png" // Route of the image file
            layout="intrinsic"
            height={791} // Desired size with correct aspect ratio
            width={866} // Desired size with correct aspect ratio
            alt=""
          />

        <p>Leading the list is Representative Mary Gay Scanlon of Pennsylvania, followed by Rep. James P. McGovern of Massachusetts and Rep. Kendra S. Horn of Oklahoma.</p>
        <h4>Programs</h4>
        <p>
          Unsurprisingly, the largest category of spending by program is the official expenses of Members. This category of spending made up 41% of the disbursements in the third quarter of 2020. It includes things like the salaries of employees, rent, and travel. Members don’t just have their office and staff in Washington, DC. They also have at least one office in their district that handles matters such as casework and local events.
        </p>

        <Image
          src="/images/house_disbursements/percentage_of_disbursements_by_program_top_10.png" // Route of the image file
          layout="intrinsic"
          height={769} // Desired size with correct aspect ratio
          width={866} // Desired size with correct aspect ratio
          alt=""
        />
        <h4>Student loans</h4>
        <p>
          The next largest category is government contributions. Student loan payments make up most of the payments, but a small portion of their total value.
        </p>
        <p>Hill staffers are highly educated; a college degree is the minimum educational requirement, and graduate degrees are preferred. Hill staffers also don’t make much. A staffer making fifty thousand dollars a year, living in one of the United State’s most expensive cities, with an expensive education to pay off, is going to struggle to make ends meet. It then makes sense that student loan repayment assistance is such a prevalent item.</p>
        <p>Despite this, student loan payments make up about one percent of the value of the payments in the government contributions program. The largest contributions were to FERS, the federal employee retirement system, FICA (i.e., payroll taxes), and insurance.</p>
        <h4>Takeaways</h4>
        <p>The House of Representatives is a complex organism that has a life of its own. Making it all work is an impressive feat, that requires the coordination of thousands of people. We get an insight into how that chaos is managed through the disbursements. It’s not cool to give the government credit for anything, but I think it’s great that these data are available for us to see. It provides more transparency into the working of Congress. You can see exactly where the money goes.</p>
        <p>Code for the charts can be found on my <a href="https://github.com/apbryant/projects/tree/master/house_disbursements">GitHub</a></p>
      </article>


      <footer>
          © Andrew Bryant
      </footer>
    </>
  )
}
