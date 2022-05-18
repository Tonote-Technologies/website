<template>
  <div>
    <main class="mb-[49px] privacy-page">
      <section class="wrapper">
        <header
          class="space-y-[28px] mt-10 flex flex-col items-center w-full lg:w-[829px] mx-auto mb-[8px] lg:mb-[69px]"
        >
          <h1
            class="text-header-color text-[28.9808px] text-center lg:text-[52.3502px] leading-[98%] tracking-[-0.015em] font-bold font-NeueHelvetica"
          >
            Privacy Policy
          </h1>
        </header>
        <!-- Main content -->
        <terms-structure>
          <template #aside>
            <h5 class="mb-[49px]">
              On this page
            </h5>
            <div>
              <span
                v-for="({ id, label }, index) in policies"
                :key="index"
                class="tab block mb-5 text-[15px] leading-[141.3%] cursor-pointer"
                :class="{ active: id === activeId }"
                @click="activeId = id"
              >
                <a :href="'#' + id" class="text-[15px]">{{ label }}</a>
              </span>
            </div>
          </template>
          <template #main>
            <div class="mb-[69px] w-full">
              <div>
                <ol class="no-numbers">
                  <!-- section 1 -->
                  <li id="introduction" class="">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Introduction
                    </h3>
                    <p class="text-[#16110D] text-[15px] leading-[202.9%]">
                      Welcome to ToNote Technologies Limited (“ToNote”, “We”,
                      “Our” or “Us”) Privacy Policy. <br><br>
                      We respect your privacy and are committed to protecting
                      your Personal Data. This Privacy Policy will inform you as
                      to how we collect, use, share and look after your Personal
                      Data when you visit our Platform (regardless of where you
                      visit it from) or use any of our services and tell you
                      about your privacy rights and how the law protects you.
                    </p>
                  </li>

                  <!-- section 2 -->
                  <li id="responsibilities">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Responsibility for this Policy
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">Detail Commercial Solicitors is the designated Data
                          Protection Officer of the Company who will be
                          responsible for compliance with this policy and
                          relevant data protection legislation.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">If you have any questions about this Privacy Policy
                          or our privacy practices, please contact our Data
                          Protection Officer in the following ways: <br><br>
                          <p>
                            <strong>Name:</strong> Detail Commercial Solicitors
                          </p>
                          <p>
                            <strong>Email address:</strong>
                            info@detailsolicitors.com
                          </p>
                          <p>
                            <strong>Office Address:</strong> DCS Place, 8 DCS
                            Street, Off Remi Olowude Way, Lekki Phase 1, Lagos
                          </p>
                          <p>
                            <strong>Telephone number:</strong> (0) 1 2771400-5
                          </p>
                        </span>
                      </li>
                    </ol>
                  </li>

                  <!-- section 3 -->
                  <li id="information">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      The Information that We Collect
                    </h3>
                    <p class="text-[#16110D] text-[14px] leading-[202.9%]">
                      We may collect personal data i.e., any information
                      relating to an identified or identifiable natural person.
                      An identifiable natural person is one who can be
                      identified, directly or indirectly, in particular by
                      reference to an identifier such as a name, an
                      identification number, location data, an online identifier
                      or to one or more factors specific to the physical,
                      physiological, genetic, mental, economic, cultural or
                      social identity of that natural person; It can be anything
                      from a name, address, a photo, an email address, bank
                      details, posts on social networking websites, medical
                      information, and other unique identifier such as but not
                      limited to MAC address, IP address, IMEI number, IMSI
                      number, SIM, Personal Identifiable Information (PII) and
                      others <strong>(‘Personal Data’).</strong>
                    </p>
                  </li>

                  <!-- section 4 -->
                  <li id="data_collection">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      How We Collect, Process, Use and Share Personal Data
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We may collect your Personal Data using forms, email
                          and physical requests, cookies, JWT, web tokens, or
                          third-party applications. You can set your browser to
                          refuse all or some browser cookies, or to alert you if
                          we access cookies. If you disable or refuse cookies,
                          please note that some parts of this Website may become
                          inaccessible or not function properly.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We use your Personal Data for, verification of your
                          identity; human resources management; access to
                          computer systems and third-party software;
                          know-your-customer and due diligence purposes;
                          recruitment purposes; regulatory compliance;
                          performance of a contract with you; compliance with
                          legal obligation; marketing; litigation; events
                          planning and hosting; in-house security; research,
                          analysis, and other business purposes or legitimate
                          interests.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">When you send email or other communications to us, we
                          may retain those communications to process your
                          inquiries, respond to your requests or improve our
                          services provided on our Platform. We may also collect
                          information while providing our services to you. Our
                          servers automatically record information that your
                          browser sends whenever you visit our Platform.</span>
                      </li>
                    </ol>
                  </li>
                  <!-- section 5 -->
                  <li id="consent">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Consent and Access Rights
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We will obtain your consent prior to collecting or
                          processing your Personal Data. Where we intend to use
                          the information for a purpose other than the purpose
                          for which it was collected, prior to such use, we will
                          request your consent.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">No consent shall be sought, given or accepted in any
                          circumstance that may engender direct or indirect
                          propagation of atrocities, hate, child rights
                          violation, criminal acts and anti-social
                          conducts.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">You may withdraw your consent at any time and may
                          request access to your Personal Data in our
                          possession. Such withdrawal will not affect the
                          lawfulness of the processing of your Personal Data
                          prior to the withdrawal of your consent. We can,
                          however, deny you access to the information where we
                          determine that your request is unreasonable.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">You have the right to request the modification or
                          amendment of your Personal Data in our
                          possession.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">In all cases of access or request for modification or
                          amendment of Personal Data, we shall request
                          sufficient identification to enable us to confirm that
                          you are the owner of the data sought to be accessed,
                          modified or amended.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">Where you provide the Personal Data of a third party
                          to us, you confirm to us that you have informed the
                          owner of the data about the purpose for which the data
                          is required and that you have obtained the consent of
                          the owner of the data to provide the data to us for
                          the purpose for which it is required and in accordance
                          with this Privacy Policy.</span>
                      </li>
                    </ol>
                  </li>

                  <!-- section 6 -->
                  <li id="data_protection">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Personal Data Protection Principles
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">
                            When we process Personal Data, we are guided by the
                            following principles. Personal Data shall be:
                          </span>
                          <ol class="alpha-list" start="a">
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">collected only for specific, legitimate and
                                lawful purposes;</span>
                            </li>
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">processed lawfully for the purpose for which it
                                was collected and not further processed in a
                                manner incompatible with which that
                                purpose(s);</span>
                            </li>
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">processed adequately, accurately and without
                                prejudice to the dignity of the human
                                person;</span>
                            </li>
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">adequate, relevant and limited to what is
                                necessary in relation to the purpose for which
                                it is processed;</span>
                            </li>
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">accurate and where necessary, kept up to
                                date</span>
                            </li>
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">stored only for the period within which it is
                                reasonably needed; and</span>
                            </li>
                            <li
                              class="mb-[6px] text-[#16110D] text-[14px] leading-[202.9%]"
                            >
                              <span class="list-gap">processed in a secure manner and protected
                                against unauthorised or unlawful access or
                                processing or accidental loss, destruction or
                                damage.</span>
                            </li>
                          </ol>
                        </div>
                      </li>
                    </ol>
                  </li>

                  <!-- section 7 -->
                  <li id="security_measures">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Security Measures
                    </h3>
                    <p class="text-[#16110D] text-[14px] leading-[202.9%]">
                      We have put in place and will maintain appropriate
                      security measures to prevent your Personal Data from being
                      used, accessed, altered or disclosed in unauthorised way.
                    </p>
                  </li>

                  <!-- section 8 -->
                  <li id="third_parties">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Access by Third Parties
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">We may share your Personal Data with third parties
                            in the following circumstances:</span>
                          <ol class="alpha-list">
                            <li>
                              <span class="list-gap">where we have your consent;</span>
                            </li>
                            <li>
                              <span class="list-gap">when with our parent company(ies), subsidiary
                                or affiliates;</span>
                            </li>
                            <li>
                              <span class="list-gap">for the verification of our identity;</span>
                            </li>
                            <li>
                              <span class="list-gap">we provide such information to other
                                professional advisers or other trusted
                                businesses or persons for the purpose of
                                processing Personal Data on our behalf or other
                                legitimate business purposes. We would require
                                such parties to process such information based
                                on our instructions and in compliance with this
                                Privacy Policy and any other appropriate
                                confidentiality and security measures; and</span>
                            </li>
                            <li>
                              <span class="list-gap">we have a good faith belief that access, use,
                                preservation or disclosure of such information
                                is reasonably necessary to (i) satisfy any
                                applicable law, regulation, legal process or
                                enforceable governmental request, (ii) enforce
                                applicable terms of service, including
                                investigation of potential violations thereof,
                                (iii) detect, prevent, or otherwise address
                                fraud, security or technical issues, or (iv)
                                protect against imminent harm to our rights,
                                property or safety as required or permitted by
                                law.</span>
                            </li>
                          </ol>
                        </div>
                      </li>
                    </ol>
                  </li>
                  <!-- section 9 -->
                  <li id="data_transfer">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Transfer of Personal Data Outside the Country
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">We may transfer Personal Data outside Nigeria in
                            the following circumstances:</span>
                          <ol class="alpha-list">
                            <li>
                              <span class="list-gap">with your consent;</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer is necessary for the performance
                                of a contract between you and ToNote or the
                                implementation of pre-contractual measures taken
                                at your request;</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer is necessary for the conclusion or
                                performance of a contract concluded in your
                                interest between the Company and another natural
                                or legal person;</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer is necessary for important reasons
                                of public interest;</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer is necessary for the
                                establishment, exercise, or defense of legal
                                claims; or</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer is necessary in order to protect
                                your vital interests; or of other persons, where
                                you are physically or legally incapable of
                                giving consent.</span>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">Upon the transfer of information outside Nigeria,
                          some principles of data protection may be violated in
                          the receiving country. By consenting to the processing
                          of your Personal Data, you consent to the transfer of
                          your Personal Data outside Nigeria.</span>
                      </li>
                    </ol>
                  </li>
                  <!-- section 10 -->
                  <li id="data_retention">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Retention of Personal Data
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We will only retain your Personal Data for as long as
                          reasonably necessary to fulfil the purposes we
                          collected it for, including for the purposes of
                          satisfying any legal, regulatory, tax, accounting or
                          reporting requirements. We may retain your Personal
                          Data for a longer period in the event of a complaint
                          or if we reasonably believe there is a prospect of
                          litigation in respect to our relationship with you.
                          Where information is kept for a longer period, such as
                          in back up storage, or archives, such information
                          would be safeguarded in accordance with this Privacy
                          Policy.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">To determine the appropriate retention period for
                          Personal Data, we consider the amount, nature and
                          sensitivity of the Personal Data, the potential risk
                          of harm from unauthorised use or disclosure of your
                          Personal Data, the purposes for which we process your
                          Personal Data and whether we can achieve those
                          purposes through other means, and the applicable
                          legal, regulatory, reporting or other
                          requirements.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">Where any information retained is stored in an
                          encrypted format, considerations must be taken for
                          secure storage of the encryption keys. Encryption keys
                          must be retained as long as the data that the keys
                          decrypt is retained.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">In some circumstances we will anonymise your Personal
                          Data (so that it can no longer be associated with you)
                          for research or statistical purposes, in which case we
                          may retain and use this information indefinitely
                          without further notice to you.</span>
                      </li>
                    </ol>
                  </li>

                  <!-- section 11 -->
                  <li id="violations">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Violations
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We will take swift action to remedy any suspected
                          breaches of Personal Data.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">We will not be responsible for any breach of
                            Personal Data which occurs as a result of:</span>
                          <ol class="alpha-list">
                            <li>
                              <span class="list-gap">an event which is beyond our control;</span>
                            </li>
                            <li>
                              <span class="list-gap">an act or threats of terrorism;</span>
                            </li>
                            <li>
                              <span class="list-gap">any act of God (including but not limited to
                                fires, explosions, earthquakes, floods,
                                epidemics, or pandemics) which compromises our
                                data protection measures;</span>
                            </li>
                            <li>
                              <span class="list-gap">war, hostilities (whether war be declared or
                                not), invasion, act of foreign enemies,
                                requisition, or embargo, rebellion, revolution,
                                insurrection, or military or usurped power, or
                                civil war which compromises our data protection
                                measures;</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer of your Personal Data to a third
                                party on your instructions; or</span>
                            </li>
                            <li>
                              <span class="list-gap">the use of your Personal Data by a third party
                                designated by you.</span>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">If you know or suspect that a breach of Personal Data
                          has occurred, or a violation of this Privacy Policy
                          has occurred, you should immediately contact the Data
                          Protection Officer at the contact information provided
                          above.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">Violations of this Privacy Policy by employees may
                          result in disciplinary action.</span>
                      </li>
                    </ol>
                  </li>

                  <!-- section 12 -->
                  <li id="legal_rights">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Your Legal Rights
                    </h3>
                    <ol class="nested-list numbered">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">You have the right to:</span>
                          <ol class="alpha-list">
                            <li>
                              <span class="list-gap">with your consent;</span>
                            </li>
                            <li>
                              <span class="list-gap">Request access to your Personal Data (commonly
                                known as a "data subject access request"). This
                                enables you to receive a copy of the Personal
                                Data we hold about you and to check that we are
                                lawfully processing it.</span>
                            </li>
                            <li>
                              <span class="list-gap">Request correction of the Personal Data that we
                                hold about you. This enables you to have any
                                incomplete or inaccurate data we hold about you
                                corrected, though we may need to verify the
                                accuracy of the new data you provide to
                                us.</span>
                            </li>
                            <li>
                              <span class="list-gap">Request erasure of your Personal Data. This
                                enables you to ask us to delete or remove
                                Personal Data where there is no good reason for
                                us continuing to process it. You also have the
                                right to ask us to delete or remove your
                                Personal Data where you have successfully
                                exercised your right to object to processing,
                                where we may have processed your information
                                unlawfully or where we are required to erase
                                your Personal Data to comply with local law.
                                Note, however, that we may not always be able to
                                comply with your request of erasure for specific
                                legal reasons which will be notified to you, if
                                applicable, at the time of your request.</span>
                            </li>
                            <li>
                              <span class="list-gap">Object to processing of your Personal Data
                                where we are relying on a legitimate interest
                                (or those of a third party) and there is
                                something about your particular situation which
                                makes you want to object to processing on this
                                ground as you feel it impacts on your
                                fundamental rights and freedoms. You also have
                                the right to object where we are processing your
                                Personal Data for direct marketing purposes. In
                                some cases, we may demonstrate that we have
                                compelling legitimate grounds to process your
                                information which override your rights and
                                freedoms.</span>
                            </li>
                            <li>
                              <span class="list-gap">the transfer is necessary in order to protect
                                your vital interests; or of other persons, where
                                you are physically or legally incapable of
                                giving consent.Request restriction of processing
                                of your Personal Data. This enables you to ask
                                us to suspend the processing of your Personal
                                Data in the following scenarios:</span>
                              <ol class="roman-list">
                                <li>
                                  <span class="list-gap">If you want us to establish the data's
                                    accuracy.</span>
                                </li>
                                <li>
                                  <span class="list-gap">Where you need us to hold the data even if
                                    we no longer require it as you need it to
                                    establish, exercise or defend legal
                                    claims.</span>
                                </li>
                                <li>
                                  <span class="list-gap">You have objected to our use of your
                                    Personal Data but we need to verify whether
                                    we have overriding legitimate grounds to use
                                    it.
                                  </span>
                                </li>
                                <!-- <li><span class="list-gap"></span></li> -->
                              </ol>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">If you wish to exercise any of the rights set out
                          above, contact the Data Protection Officer at the
                          contact information provided above.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">You will not have to pay a fee to:
                          </span>
                          <ol class="alpha-list">
                            <li>
                              <span class="list-gap">access your Personal Data;</span>
                            </li>
                            <li>
                              <span class="list-gap">change your Personal Data provided to us;
                                or</span>
                            </li>
                            <li>
                              <span class="list-gap">to exercise any of the other rights.</span>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <div class="flex flex-col">
                          <span class="list-gap">Notwithstanding the above, we will charge a
                            reasonable fee where:</span>
                          <ol class="alpha-list">
                            <li>
                              <span class="list-gap">any of your requests is clearly unfounded,
                                repetitive, or excessive. Alternatively, we
                                could refuse to comply with your request in
                                these circumstances if any criminal or illegal
                                activity is suspected.</span>
                            </li>
                            <li>
                              <span class="list-gap">you request to change your Personal Data in our
                                possession more than three (3) times within a
                                12-month period.</span>
                            </li>
                          </ol>
                        </div>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We may need to request specific information from you
                          to help us confirm your identity and ensure your right
                          to access your Personal Data (or to exercise any of
                          your other rights). This is a security measure to
                          ensure that Personal Data is not disclosed to any
                          person who has no right to receive it. We may also
                          contact you to ask you for further information in
                          relation to your request to speed up our
                          response.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We try to respond to all legitimate requests within
                          one month. Occasionally it could take us longer than a
                          month if your request is particularly complex or you
                          have made a number of requests. In this case, we will
                          notify you and keep you updated.</span>
                      </li>
                    </ol>
                  </li>

                  <!-- section 13 -->
                  <li id="changes">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Changes to the Privacy Policy
                    </h3>
                    <ol class="nested-list numbered list-inside">
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">We keep our Privacy Policy under regular
                          review.</span>
                      </li>
                      <li
                        class="text-[#16110D] text-[14px] leading-[202.9%] flex"
                      >
                        <span class="list-gap">You wish to exercise any of the rights set out above,
                          contact the Data Protection Officer at the contact
                          information provided above.</span>
                      </li>
                    </ol>
                  </li>

                  <!-- section 14 -->
                  <li id="contact_us">
                    <h3
                      class="text-[15px] lg:text-[24px] leading-[141.3%] lg:leading-[79.3%] mb-[17px] lg:mb-[21px] font-bold mt-[32px] lg:mt-[44px]"
                    >
                      Contact Us
                    </h3>
                    <div class="text-[#16110D] text-[14px] leading-[202.9%]">
                      <p>
                        If you wish to exercise any of your rights under this
                        Privacy Policy, or know or suspect that a breach of your
                        Personal Data or a violation of this Privacy Policy has
                        occurred, or if you have any questions about this
                        Privacy Policy or our privacy practices, please contact
                        us at:
                      </p>
                      <br><br>
                      <p>Fikayo Durosinmi-Etti</p>
                      <p>Designation: Co-Founder/CEO ToNote</p>
                      <p>Email: Fikayo@tonote.ng</p>
                      <p>
                        Office Address: 1625b Saka Jojo Street, Victoria Island,
                        Lagos
                      </p>
                      <p>Telephone: +2349057170627</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </template>
        </terms-structure>
      </section>
    </main>
  </div>
</template>

<script>
import { policies } from './data.js'

export default {
  name: 'PrivacyPolicy',
  data () {
    return {
      policies,
      activeId: 'introduction'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main.scss';

.privacy-page,
.privacy-page *:not(header > h1) {
  font-family: 'Karla', sans-serif;
}

.privacy-page .tab.active {
  color: #003bb3;
}

.no-numbers ol.numbered {
  counter-reset: subitem;
  list-style: unset;
}
.no-numbers ol.numbered > li:before {
  content: counter(item) '.' counter(subitem);
  counter-increment: subitem;
  flex-basis: 30px;
  flex-shrink: 0;
}
.no-numbers ol.numbered ol.alpha-list > li:before {
  content: '';
}
ol.no-numbers {
  counter-reset: item;
}

ol.no-numbers > li:before {
  content: '';
  counter-increment: item;
}
.nested-list {
  padding-left: 29px;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
}
.alpha-list {
  list-style: lower-alpha;
  padding-left: 40px;
}
.roman-list {
  list-style: lower-roman;
  padding-left: 40px;
}
li .list-gap {
  position: relative;
  left: 10px;
}

/* .no-numbers ol.alpha-list li:before {
  list-style-type: lower-alpha;
  content: counter(alphaitem) ")";
  counter-increment: alphaitem;
} */
</style>
