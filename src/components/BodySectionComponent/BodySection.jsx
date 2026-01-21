import BodyTopLearnSection from "./BodyTopLearnSection";
import BodyTopStatSection from "./BodyTopStatSection"
import BodyCustomersInfoSection from './BodyCustomersInfoSection'
import BodyCommunityUpdateSection from "./BodyCommunityUpdateSection";
import BodyCommunityCard from "./BodyCommunityCard";
import '../../LandingStyles/BodyCommunitySectionStyles/bodyCommunitySection.css'

export default function BodySection() {
    const stats = [
        {
            img: '/IconImageOne.png',
            alt: 'counter with the number of participants',
            title: '2,245,341',
            text: 'Members',
        },
        {
            img: '/IconImageTwo.png',
            alt: 'counter with the number of Clubs',
            title: '46,328',
            text: 'Clubs',
        },
        {
            img: '/IconImageThree.png',
            alt: 'counter with the number of event bookings',
            title: '828,867',
            text: 'Event Bookings',
        },
        {
            img: '/IconImageFour.png',
            alt: 'counter with the number of payments',
            title: '1,926,436',
            text: 'Payments',
        },
    ]

    return (
        <>
            <BodyTopLearnSection variant='dark' 
            isSpaced
            imgSrc='/BodyLearnImage.png'
            imgAlt='Main image in Body learn section'
            title='The unseen of spending three years at Pixelgrade'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.'
            btnContent='Learn More'
            />
            <BodyTopStatSection titleStart='Helping a local' titleEnd='business reinvent itself' description='We reached here with our hard work and dedication' stats={stats}/>
            <BodyTopLearnSection variant='dark'
            isSecond
            imgSrc='/BodyLearnSecondImg.png'
            imgAlt='Main image in Body learn section'
            title='How to design your site footer like we did'
            description='Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.'
            btnContent='Learn More'
            />
            <BodyCustomersInfoSection 
            descriptionOne='Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
            vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
            nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,
            vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.'
            title='Tim Smith'
            descriptionTwo='British Dragon Boat Racing Association'
            customersMainBtn='Meet all customers ➜'
            />
            <BodyCommunityUpdateSection 
            title='Caring is the new marketing'
            description="The Nexcent blog is the best place to read about the latest membership insights,
            trends and more. See who's joining the community, read about how our community are increasing 
            their membership income and lot's more."/>
            <div className="body-community-card-main-container">
                <BodyCommunityCard description='Creating Streamlined Safeguarding Processes with OneRen' btnName='Read more ➜'/>
                <BodyCommunityCard description='What are your safeguarding responsibilities and how can you manage them?' btnName='Read more ➜'/>
                <BodyCommunityCard description='Revamping the Membership Model with Triathlon Australia' btnName='Read more ➜'/> 
            </div>
        </>
    );
}