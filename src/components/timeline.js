import styles from '@/styles/timeline.module.css'

export default function Timeline() {
    return (
        <div className={styles.timeline}>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>1991</h2>
                    <p className={styles.timeline_paragraph}>Jimmy was born at Changsha, China - a small city known for its spicy food and reginal TV shows. </p>
                </div>
            </div>
            <div className={styles.timeline_container_right}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>1999</h2>
                    <p className={styles.timeline_paragrap}>Jimmy started picking an interest in Go, a board games played in a 19 by 19 board with black and white stones. He started attending classNamees and entering competitions for the next 2 years, where he won a few reginal tournaments with it. He eventually represented NZ to compete in various World Championships</p>
                </div>
            </div>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2002</h2>
                    <p className={styles.timeline_paragraph}>The family decided to move to New Zealand together to Hamilton, where Jimmy would start his middle school at Berkley Intermediate High. It took sometime, but eventually become fluent in English and gets accustomed to the Kiwi culture.
                    </p>
                </div>
            </div>
            <div className={styles.timeline_container_right}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2004</h2>
                    <p className={styles.timeline_paragraph}>Max - Jimmy&apos;s father saw an opportunaty to open a small business in Christchurch, so his family moved down south all together. They opened a small convenient store by the beach of New Brighton, while Jimmy started his High School Journey in Burnside, taking a long bus ride every day. </p>
                </div>
            </div>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2008</h2>
                    <p className={styles.timeline_paragraph}>Jimmy graduated high school and started his first job as an English/Maths tutor in Kumon learning centre during the summer holiday. Shortly after, he would start studying Electrical Engineering at University of Canterbury.</p>
                </div>
            </div>
            <div className={styles.timeline_container_right}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2012</h2>
                    <p className={styles.timeline_paragraph}>Jimmy graduated with Bachelor of Engineering with Honours, and landed his first full time job as a QA Engineer in Telogis _ the company will later merge with Verizon Connect. Here, Jimmy starts his IT journey, learning all the basics of software testing and development.</p>
                </div>
            </div>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2016</h2>
                    <p className={styles.timeline_paragraph}>Christchurch felt too small for Jimmy to grow, he moved to Melbourne this year and started working as an Automation Engineer in Tetra Pak where he could apply his knowledge from his Engineering degree.</p>
                </div>
            </div>
            <div className={styles.timeline_container_right}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2017</h2>
                    <p className={styles.timeline_paragraph}>During his time in Tetra Pak, Jimmy spent almost 2 years in involved in the building and upgrade of a major cheese factory in Stanhope, Victoria. He started as someone who simply helps out in instrumentation and commissioning during the first construction project but later became the Automation lead of the second upgrade project</p>
                </div>
            </div>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2019</h2>
                    <p className={styles.timeline_paragraph}>Jimmy moved to Sydney to look for more adventures, he started working for Dematic as a Software Test Engineer, where he would prepare and automate test scenarios for large Warehouse Control System provided to customers like Starbucks</p>
                </div>
            </div>
            <div className={styles.timeline_container_right}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2020</h2>
                    <p className={styles.timeline_paragraph}>COVID changed everyone&apos;s life style this year. Jimmy started working from home 6 months into his new job, a lot of people struggled but Jimmy adapted, he met Lisa earlier in the year and would horde toilet paper together in their little home during the troubled times. </p>
                </div>
            </div>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2021</h2>
                    <p className={styles.timeline_paragrap}>Even the troubled time in COVID would not stop Jimmy having his happily ever after with Lisa, they got married earlier this year with a small Registry Wedding as gatherings are still very limited during the time</p>
                </div>
            </div>
            <div className={styles.timeline_container_right}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2023</h2>
                    <p className={styles.timeline_paragraph}>Baby Oliver was born early this year, Jimmy finally became a dad. He had gained new found wisdoms and decided that in order to best support his family, he would need to upskill and specialise. He created a few webapps including this portfolio site, and practised hosting them on AWS and created various pipelines to automate the build and deploy process, aiming to specialise in DevOps fields and wish to eventually become a Cloud Architect</p>
                </div>
            </div>
            <div className={styles.timeline_container_left}>
                <div className={styles.timeline_content}>
                    <h2 className={styles.timeline_heading}>2025</h2>
                    <p className={styles.timeline_paragraph}>Oliver became 2 years old, and talked a lot, just his mother. Unfortunately for Jimmy, Tech industry was getting tough for a change, and his company was one of the few that is actually getting busier. Between all the work related travels and overtimes as well as being a busy dad and teaching Oliver various things about life, he was too busy finding a more specialised job. However, it did not stop him from upskilling and gaining a variety of experiences, he became a AWS Certified Developer Associate and was on his way to become a AWS Devops Professional. He has also experimented on a few different new webapp projects, and tried out various new cloud related related technologies, hoping to one day make use of his new skills to better support his family.  </p>
                </div>
            </div>
        </div> 
        );
}