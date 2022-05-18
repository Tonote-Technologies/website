<template>
  <ol class="list-inside mt-[32px]">
    <li :class="liStyle">
      <strong :class="strongStyle">“Account”</strong>
      <span :class="spanStyle">shall have the meaning given to it in paragraph 4;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Applicable Laws”</strong>
      <span :class="spanStyle">means the Constitution of the Federal Republic of Nigeria, any national, provincial, state or local law, statute, bye-law, ordinance, decree, directive, regulation, standard, circular, guideline, rule, code, delegated or subordinated legislation, judicial act or decision, judgment, order, proclamation, directive, executive order, other legislative measure, binding actions or enactments of the Federal Republic of Nigeria or any other government authority in Nigeria;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Authorised Individual”</strong>
      <span :class="spanStyle">means any officer authorised by the board of directors of ToNote to execute employment contracts;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Content”</strong>
      <span :class="spanStyle">means the Platform, and the information, writings, images and/or other works that the User sees, hears or otherwise experience on the Platform;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Confidential Information”</strong>
      <span :class="spanStyle">means all information (however recorded or preserved) disclosed by a Party (the “Disclosing Party”) or its representatives to another Party (the “Receiving Party”) under this Terms, or that a Receiving Party accesses from the Disclosing Party in connection with the Services ToNote provides under this Terms  that meets one of the following two criteria: the information either (i) is identified by a “CONFIDENTIAL” legend or similar legend of the Disclosing Party, or (ii) is obtained under circumstances such that the Receiving Party knew or reasonably should have known that the Information should be treated as confidential to the Disclosing Party. Confidential Information includes information in any form or medium (whether oral, written, electronic, or other) and includes inventions; specifications; drawings; models; samples; reports; plans; financial information; work-in-progress; forecasts; computer programs or documentation; trade secrets; know-how; strategies; User Data including any User’s non-public personal information;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Document”</strong>
      <span :class="spanStyle">means a document in an electronic form that a Signatory present on the Platform to be Notarised, sealed or otherwise used in connection with a Transaction or other Services;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Login Credentials”</strong>
      <span :class="spanStyle">shall have the meaning in paragraph 4.2;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Intellectual Property Rights”</strong>
      <span :class="spanStyle">means the patents, rights to inventions and discoveries, utility models, copyright, trademarks, service marks, trade, business and domain names, rights in trade dress or get-up, rights in goodwill or to sue for passing off, rights in designs, rights in computer software, database rights, moral rights, rights in confidential or proprietary information, (including know-how and trade secrets) and any other intellectual property rights, in each case whether registered or unregistered and including all applications for and renewals or extensions of such rights, and all similar or equivalent rights or forms of protection in any part of the world belonging to ToNote or its affiliates;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Materials”</strong>
      <span :class="spanStyle">has the meaning given to it in paragraph 10.1;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Notarisation”</strong>
      <span :class="spanStyle">means an authorised notarial act performed by a Notary in accordance with Applicable Laws;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Notary”</strong>
      <span :class="spanStyle">means an individual sworn-in as a notary public by the Chief Justice of Nigeria to perform Notarisation;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Personal Data”</strong>
      <span :class="spanStyle">means any information relating to an identified or identifiable natural person, including personal data or information as defined by the Applicable Laws governing this Agreement;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Platform”</strong>
      <span :class="spanStyle">means the ToNote Platform which, among other things, allows authorised Users, Signatories, and Notaries and other Users to facilitate remote online notarisations, stamping, electronic signing and other remote document transaction services to individuals and businesses;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Registration Data”</strong>
      <span :class="spanStyle">has the meaning given to it in paragraph 4.3;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Services”</strong>
      <span :class="spanStyle">means the provision of the Platform to procure Notarisation, the execution of Documents and any other services and functionalities offered or facilitated by ToNote and provided to a User;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Signatory”</strong>
      <span :class="spanStyle">means a User requesting an online Notarisation and making an acknowledgement, oath or affirmation before a Notary;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“ToNote”</strong>
      <span :class="spanStyle">means ToNote Technologies Limited;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">“Transaction”</strong>
      <span :class="spanStyle">means a specific instance of Services requested by a Signatory on the Platform. A Transaction will typically involve a Document or set of Documents;</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">User(s)</strong>
      <span :class="spanStyle">means any individual that accesses the Platform, participates in any Transaction and is not employed by ToNote and acting in the course of their employment; References to “you”, “your” and “yours” should all be read as referring to a User; and</span>
    </li>
    <li :class="liStyle">
      <strong :class="strongStyle">User Data</strong>
      <span :class="spanStyle">means all data and information regarding a User which may be provided by a User or gathered by ToNote as part of the Transaction. It includes each User’s provision of content, including but not limited to Personal Data, Registration Data, Login Credentials, Confidential Information, payment information, biometric information and documentational or other Transaction information;</span>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'TDefinition',
  data () {
    return {
      liStyle: 'flex flex-col lg:flex-row mb-[30px]',
      strongStyle: 'w-[138px] text-header-color font-bold text-[18px] leading-[202.9%] mr-[29px]',
      spanStyle: 'w-full lg:w-[759px] text-[15px] leading-[30px] text-header-color desc'
    }
  }
}
</script>

<style scoped>
*, li
 {
  font-family: 'Karla', sans-serif;
}
</style>
