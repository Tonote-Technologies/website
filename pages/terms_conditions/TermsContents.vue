<template>
  <div id="general">
    <h1 :class="h1Style">
      General
    </h1>

    <p class="text-[#16110D] text-[15px] leading-[202.9%] desc">
      Please read the following Terms and Conditions of Service (“Terms”) carefully before using the ToNote Platform.
    </p>

    <p class="text-[#16110D] text-[15px] leading-[202.9%] desc">
      Your access to and use of the Platform is subject to your acceptance of and compliance with these Terms. These Terms apply to all Users, Notaries and others who access or use the Platform.By using the ToNote Platform and Website, you accept these Terms.
    </p>
    <ol class="list-inside mt-5">
      <!-- Definitions -->
      <li id="definition" class="mb-10">
        <h1 :class="h1Style">
          Definitions and Interpretation
        </h1>
        <p class="text-[#16110D] text-[15px] leading-[202.9%] desc">
          In these Terms, unless the context otherwise requires, the following expressions have the following meanings:
        </p>
        <t-definition />
      </li>
      <!-- About -->
      <li id="about" class="mb-10">
        <h1 :class="h1Style">
          About ToNote Platform
        </h1>
        <t-about />
      </li>
      <!-- Agreement -->
      <li id="agreement" class="mb-10">
        <h1 :class="h1Style">
          Agreement to be Binding
        </h1>
        <p>By accessing, using or interacting with the Platform, you automatically agree to be subject to these Terms, without any modification. If you disagree with any part of the Terms, you may not access the Platform.</p>
      </li>
      <!-- User Accounts -->
      <li id="user" class="mb-10">
        <h1 :class="h1Style">
          User Accounts
        </h1>
        <user-account />
      </li>
      <!-- Obligations of the Notary -->
      <li id="obligation" class="mb-10">
        <h1 :class="h1Style">
          Obligations of the Notary
        </h1>
        <ob-notary />
      </li>
      <!-- Notarisation Rights and Grants -->
      <li id="grants" class="mb-10">
        <h1 :class="h1Style">
          Notarisation Rights and Grants
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['6.1'] before:mr-2 before:mr-4 flex">
            A notary session using the Platform creates a file that is stored by us and other authorized persons under contract or by law electronically.  The file may contain data that is used or collected during a User’s notary session comprising account information, identity-related information, photos, images, documents, session information, notary journal information, audio and video recording of the Session, credential information and other information collected in the notary session (collectively the “Information”).
          </li>
          <li class="mb-3 before:content-['6.2'] before:mr-2 before:mr-4 flex">
            You understand and agree that by using the Platform, ToNote is not a party to any part of the notary session(s) and is not responsible for retaining any Information for a specified period of time for your use.
          </li>
          <li class="mb-3 before:content-['6.3'] before:mr-2 before:mr-4 flex">
            ToNote does not confirm the legality of (i) electronic signatures of persons other than Signatories; (ii) documents, their preparation and legal effect, and that any issues are between you as a User and the Notary in this section.
          </li>
        </ol>
      </li>
      <!-- Prohibited Uses -->
      <li id="uses" class="mb-10">
        <h1 :class="h1Style">
          Prohibited Uses
        </h1>
        <prob-uses />
      </li>
      <!-- Intellectual Property and other Rights -->
      <li id="rights" class="mb-10">
        <h1 :class="h1Style">
          Intellectual Property and other Rights
        </h1>
        <in-prop-rights />
      </li>
      <!-- Data Protection -->
      <li id="dataprotection" class="mb-10">
        <h1 :class="h1Style">
          Data Protection
        </h1>
        <data-protection />
      </li>
      <!-- User Information and Materials -->
      <li id="materials" class="mb-10">
        <h1 :class="h1Style">
          User Information and Materials
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['10.1'] before:mr-2 before:mr-4 flex">
            <span>
              You represent that you have all right title, and interest to materials you post on the Platform or Documents you provide to ToNote ("<strong>Materials</strong>"), including but not limited to any consent, authorization, release, clearance or license from any third party (such as, but not limited to, any release related to rights of privacy or publicity) necessary for you to provide, post, upload, input or submit the Materials, and that posting such Materials does not violate or constitute the infringement of any patent, copyright, trademark, trade secret, right of privacy, right of publicity, moral rights, or other Intellectual Property Right recognized by any applicable jurisdiction of any person or entity, or otherwise constitute the breach of any agreement with any other person or entity.
            </span>
          </li>
          <li class="mb-3 before:content-['10.2'] before:mr-2 before:mr-4 flex">
            <span>
              You further represent and warrant that you are who you say you are, that you have not submitted fictitious, false or inaccurate information about yourself, and that all information contained in the posted Materials is true and your own work or work you are authorized to submit, and that the posted Materials do not contain any threatening, harassing, libelous, false, defamatory, offensive, obscene, or pornographic, material, or other material that would violate any Applicable Law or regulation. You agree that you will not knowingly and with intent to defraud provide material and misleading information.
            </span>
          </li>
          <li class="mb-3 before:content-['10.3'] before:mr-2 before:mr-4 flex">
            <span>
              You represent and warrant that the Materials you supply do not violate these Terms.
            </span>
          </li>
        </ol>
      </li>
      <!-- System Outages -->
      <li id="outages" class="mb-10">
        <h1 :class="h1Style">
          System Outages
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['11.1'] before:mr-2 before:mr-4 flex">
            <span>
              ToNote shall not have any responsibility for any third-party acts or any other outages of web host providers or the internet infrastructure and network external to the Platform.
            </span>
          </li>
          <li class="mb-3 before:content-['11.2'] before:mr-2 before:mr-4 flex">
            <span>
              ToNote periodically schedules system downtime for maintenance and other purposes. In addition, unplanned system outages also may occur. ToNote does not have any liability and you waive all liability whatsoever for the resulting unavailability of the Platform or for any loss of data or transactions caused by planned or unplanned system outages or the resultant delay, mis-delivery or non-delivery of information caused by such system outages.
            </span>
          </li>
        </ol>
      </li>
      <!-- Consent -->
      <li id="consent" class="mb-10">
        <h1 :class="h1Style">
          Consent
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['12.1'] before:mr-2 before:mr-4 flex">
            <span>
              You consent to conduct electronic transactions and receive electronic communications through the Platform. This includes your consent to: (i) send and receive documents electronically; (ii) conduct business and complete transactions electronically. You understand that you are not required to give legal consent, however, if you decline, you will not be able to use the Platform.
            </span>
          </li>
          <li class="mb-3 before:content-['12.2'] before:mr-2 before:mr-4 flex">
            <span>
              You consent to the verification and authentication of your identity using third-party services. These methods may include using the Information, databases, audio and video conferencing technology, SMS text or email verification, credit reports, or other third party or other information with our Service or by third parties using any identify proofing methods, such as forensics, knowledge-based questions, biometrics, in any combination of hardware and software.
            </span>
          </li>
          <li class="mb-3 before:content-['12.3'] before:mr-2 before:mr-4 flex">
            <span>
              You grant permission to ToNote to create and store an electronic record of online notarisations, including a recording of the video and audio conference between a Signatory and a Notary on the Platform. The electronic record also includes the date and time of the notarisation; the type of notarial act; the type, the title, or a description of the electronic document or proceeding; the name and address of each Signatory involved in the Transaction or proceeding; evidence of identity of each Signatory involved in the Transaction or proceeding in the form of statement that the person is personally known to the Notary, or a notation of the type of identification document provided to the Notary and a record of the identity proofing and credential analysis; and the fee charged for the notarisation.
            </span>
          </li>
          <li class="mb-3 before:content-['12.4'] before:mr-2 before:mr-4 flex">
            <span>
              You grant permission to ToNote to use your name and/or logo as part of ToNote’s marketing and promotional efforts.
            </span>
          </li>
        </ol>
      </li>
      <!-- Fees -->
      <li id="fees" class="mb-10">
        <h1 :class="h1Style">
          Fees
        </h1>
        <ol class="list-inside">
          <li class="mb-3">
            <span class="before:content-['13.1'] before:mr-2 before:mr-4 flex">
              The fee for the Services are as follows:
            </span>
            <fees-table />
          </li>
          <li class="mb-3 before:content-['13.2'] before:mr-2 before:mr-4 flex">
            <span>
              The ToNote Business Pro Plan fee shall be paid on a monthly basis in arrears. Other fees not included within the Business Pro Plan, such as the price of seals, shall be paid at the time of each Transaction. All fees for seals  shall be due upon completion of the Transaction and you will not be able to access the applicable Document until payment is made.
            </span>
          </li>
          <li class="mb-3 before:content-['13.3'] before:mr-2 before:mr-4 flex">
            <span>
              The prices, features, and options of the Platform depend on the plan selected by a User. ToNote does not represent or warrant that a particular plan will be offered indefinitely and reservces the right to revise the prices for or alter the features and options in a paticular plan without prior notice.
            </span>
          </li>
          <li class="mb-3 before:content-['13.4'] before:mr-2 before:mr-4 flex">
            <span>
              All payments required by these Terms are exclusive of all applicable taxes, duties, levies, charges.
            </span>
          </li>
          <li class="mb-3 before:content-['13.5'] before:mr-2 before:mr-4 flex">
            <span>
              All payments shall be via debit card, direct debit, bank transfer or other methodology as may be provided on the Platform by ToNote.
            </span>
          </li>
          <li class="mb-3 before:content-['13.6'] before:mr-2 before:mr-4 flex">
            <span>
              In the event of any disputes with the fees charged, you shall notify ToNote within 15 days from payment to enable ToNote investigate the discrepancy and reimburse where necessary.
            </span>
          </li>
        </ol>
      </li>
      <!-- Third-Party Web Sites -->
      <li id="thirdparty" class="mb-10">
        <h1 :class="h1Style">
          Third-Party Web Sites
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['14.1'] before:mr-2 before:mr-4 flex">
            <span>
              ToNote may, from time to time, provide links on the Platform to third party websites or information, these links are provided solely as a convenience to you. Such links do not constitute or imply an endorsement, sponsorship, or recommendation by ToNote of the third party, the third-party website, or the information there.
            </span>
          </li>
          <li class="mb-3 before:content-['14.2'] before:mr-2 before:mr-4 flex">
            <span>
              ToNote has no control over, nor assume any responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that ToNote shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such websites or services.
            </span>
          </li>
        </ol>
      </li>
      <!-- Downloading files -->
      <li id="downloading" class="mb-10">
        <h1 :class="h1Style">
          Downloading files
        </h1>
        <p>
          ToNote cannot and does not guarantee or warrant that files available for downloading through the Platform will be free of infection by software viruses or other harmful computer code, files or programs.
        </p>
      </li>
      <!-- Disclaimers -->
      <li id="disclaimers" class="mb-10">
        <h1 :class="h1Style">
          Disclaimers
        </h1>
        <ol class="list-inside">
          <li class="mb-3">
            <span class="before:content-['16.1'] before:mr-2 before:mr-4 flex">
              ToNote and its service providers, licensors and suppliers make no representations about the suitability, reliability, availability, timeliness, security or accuracy of the Platform or the Content for any purpose. To the maximum extent permitted by Applicable law, all such information, software, products, service and related graphics are provided "as is" without warranty or condition of any kind.
            </span>
          </li>
          <li class="mb-3 before:content-['16.2'] before:mr-2 before:mr-4 flex">
            <span>
              ToNote and its service providers, licensors and suppliers hereby disclaim all warranties and conditions of any kind with regard to the Platform and the Content, including all implied warranties or conditions of merchantability, fitness for a particular purpose, title and non-infringement.
            </span>
          </li>
          <li class="mb-3 before:content-['16.3'] before:mr-2 before:mr-4 flex">
            <span>
              No statement or information, whether oral or written, obtained from ToNote in any means or fashion will create any warranty not expressly and explicitly set forth in this agreement.
            </span>
          </li>
          <li class="mb-3 before:content-['16.4'] before:mr-2 before:mr-4 flex">
            <span>
              The Content may include inaccuracies or typographical errors.
            </span>
          </li>
        </ol>
      </li>
      <!-- Data Protection -->
      <li id="limitationliability" class="mb-10">
        <h1 :class="h1Style">
          Indemnification and Limitation of Liability
        </h1>
        <limitation-liability />
      </li>
      <!-- Updates and Communications -->
      <li id="updates-comm" class="mb-10">
        <h1 :class="h1Style">
          Updates and Communications
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['18.1'] before:mr-2 before:mr-4 flex">
            ToNote reserves the right, at its sole discretion, to modify the Platform, Content and these Terms or any additional terms and conditions that are relevant to the Platform from time to time to reflect changes in the law or to the Services.
          </li>
          <li class="mb-3 before:content-['18.2'] before:mr-2 before:mr-4 flex">
            <span>
              ToNote will post the revised terms on the Platform with a “<strong>Last Modification</strong>” date. Please review the Platform on a regular basis to obtain timely notice of any revisions. If you continue to use the Platform after the revisions take effect, you agree to be bound by the revised terms. You agree that ToNote shall not be liable to you or to any third party for any modification of the Terms.
            </span>
          </li>
          <li class="mb-3 before:content-['18.3'] before:mr-2 before:mr-4 flex">
            <span>
              You agree to receive all communications, agreements, and notices that ToNote provides in connection with the Services (“<strong>Communication</strong>”), including, but not limited to, Communications related to ToNote’s delivery of the Services and your purchase of or subscription to the Platform via electronic means, including by e-mail, text, inproduct notifications, or by posting them on the Platform. You agree that all Communications ToNote provides to you electronically satisfies any legal requirement that such Communications be in writing or be delivered in a particular manner and to agree to keep your Account contact information current.
            </span>
          </li>
        </ol>
      </li>
      <!-- Reference to Privacy Policy -->
      <li id="privacy" class="mb-10">
        <h1 :class="h1Style">
          Reference to Privacy Policy
        </h1>
        <p>
          For more information on the types and use of personal information ToNote will collect in order to create your Login Credentials and Account, please review our <nuxt-link to="/privacy-policy">
            Privacy Policy
          </nuxt-link>.
        </p>
      </li>
      <!-- Force Majeure -->
      <li id="force" class="mb-10">
        <h1 :class="h1Style">
          Force Majeure
        </h1>
        <p>
          ToNote is not liable for any loss incurred by a User due to our delay or nonperformance arising out of any cause or event beyond our control, including acts of civil or military authority, national emergencies, epidemics, pandemics, labor difficulties, fire, mechanical breakdown, flood, catastrophe, acts of God, insurrection, war, riots, computer failure, communications failure, or power failure.
        </p>
      </li>
      <!-- Severance -->
      <li id="severance" class="mb-10">
        <h1 :class="h1Style">
          Severance
        </h1>
        <p>
          If any provision or part-provision of this Terms is or becomes invalid, illegal or unenforceable, it shall be deemed modified to the minimum extent necessary to make it valid, legal and enforceable. If such modification is not possible, the relevant provision or part-provision shall be deemed deleted. Any modification to or deletion of a provision or part-provision under this Clause shall not affect the validity and enforceability of the rest of this Terms.
        </p>
      </li>
      <!-- Termination -->
      <li id="termination" class="mb-10">
        <h1 :class="h1Style">
          Termination
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['25.1'] before:mr-2 before:mr-4 flex">
            ToNote may cancel, suspend or block your use of the Platform without notice if there has been a violation of these Terms. Your right to use the Platform will end once your registration is terminated, and any data you have stored on the Platform will be deleted, unless ToNote is required to retain it by law or for other valid business purposes.
          </li>
          <li class="mb-3 before:content-['25.2'] before:mr-2 before:mr-4 flex">
            You may terminate your registration at any time. ToNote is not responsible or liable for any records or information that is made unavailable to you as a result of your termination of registration. You agree that ToNote will not be liable to you or any other party for any termination of your access to the Service.
          </li>
        </ol>
      </li>
      <!-- Governing Law and Jurisdiction -->
      <li id="jurisdiction" class="mb-10">
        <h1 :class="h1Style">
          Governing Law and Jurisdiction
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['23.1'] before:mr-2 before:mr-4 flex">
            This Terms and any dispute or claim arising out of or in connection with it or its subject matter or formation (including non-contractual disputes or claims) shall be governed and construed in accordance with the laws of the Federal Republic of Nigeria.
          </li>
          <li class="mb-3 before:content-['23.2'] before:mr-2 before:mr-4 flex">
            The User agrees that any dispute, difference or claim arising out of or in connection with this Terms shall be resolved amicably by both parties within 30 days through negotiations failing which the dispute shall be settled exclusively and finally by Mediation. There shall be a mediator appointed by the Director of the Lagos Multi-Door Courthouse who shall settle such dispute.
          </li>
          <li class="mb-3 before:content-['23.3'] before:mr-2 before:mr-4 flex">
            Both Parties agree that the decision of the mediator is final and that they shall be bound by same and keep the contents of the mediation proceedings strictly confidential.
          </li>
          <li class="mb-3 before:content-['23.4'] before:mr-2 before:mr-4 flex">
            The language of the mediation shall be English, the venue of the mediation shall be Lagos, Nigeria and the cost of the mediation proceedings shall be borne by the breaching party as determined by the appointed mediator.
          </li>
        </ol>
      </li>
      <!-- No-Partnership or Agency -->
      <li id="agency" class="mb-10">
        <h1 :class="h1Style">
          No-Partnership or Agency
        </h1>
        <p>
          No agency, partnership, joint venture, or employment is created as a result of these Terms and you do not have any authority of any kind to bind ToNote in any respect whatsoever; instead, our relationship is that of independent contractors.
        </p>
      </li>
      <!-- Miscellaneous -->
      <li id="miscellaneous" class="mb-10">
        <h1 :class="h1Style">
          Miscellaneous
        </h1>
        <ol class="list-inside">
          <li class="mb-3 before:content-['25.1'] before:mr-2 before:mr-4 flex">
            These Terms create no third-party beneficiary rights to ToNote’s products and services or to any third party product made available through the Platform.
          </li>
          <li class="mb-3 before:content-['25.2'] before:mr-2 before:mr-4 flex">
            Section headings are for ease of reference only.
          </li>
        </ol>
      </li>
      <!-- Contact Us -->
      <li id="contactsales" class="mb-10">
        <h1 :class="h1Style">
          Contact Us
        </h1>
        <p>
          If you have questions or concerns with respect to these Terms, please contact us at <a href="tel:+2348146507035">+2348146507035</a> or leave us a note at <a href="mailto:ask@gettonote.com">ask@gettonote.com</a>.
        </p>
      </li>
    </ol>
  </div>
</template>
<script>
import TDefinition from './Definition.vue'
import TAbout from './TAbout.vue'
import UserAccount from './UserAccount.vue'
import ObNotary from './ObNotary.vue'
import ProbUses from './ProbUses.vue'
import InPropRights from './InPropRights.vue'
import DataProtection from './DataProtection.vue'
import FeesTable from './FeesTable.vue'
import LimitationLiability from './LimitationLiability.vue'
export default {
  name: 'TermsContents',
  components: {
    TDefinition,
    TAbout,
    UserAccount,
    ObNotary,
    ProbUses,
    InPropRights,
    DataProtection,
    FeesTable,
    LimitationLiability
  },
  data () {
    return {
      h1Style: 'text-header-color text-[15px] leading-[141.3%] lg:text-[24px] lg:leading-[79.3%] mb-[9px] lg:mb-[21px] font-bold font-NeueHelvetica'
    }
  }
}
</script>
<style scoped>
#general *
 {
  font-family: 'Karla', sans-serif;
}
#general a:link {
  color: #003BB3;
}
tr,th, td {
  padding: 5px;
}
</style>
