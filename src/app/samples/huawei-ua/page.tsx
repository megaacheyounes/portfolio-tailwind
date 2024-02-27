'use client';

import PageWrapper from '@/containers/PageWrapper';
import Section from '@/containers/Section';

const methods: (() => boolean)[] = [
  () => {
    const userAgent = navigator.userAgent;
    return userAgent.match(/Huawei/i) !== null;
  },
  () => {
    const huaweiDevicesRegex =
      /ALP-|AMN-|ANA-|ANE-|ANG-|AQM-|ARS-|ART-|ATU-|BAC-|BLA-|BRQ-|CAG-|CAM-|CAN-|CAZ-|CDL-|CDY-|CLT-|CRO-|CUN-|DIG-|DRA-|DUA-|DUB-|DVC-|ELE-|ELS-|EML-|EVA-|EVR-|FIG-|FLA-|FRL-|GLK-|HMA-|HW-|HWI-|INE-|JAT-|JEF-|JER-|JKM-|JNY-|JSC-|LDN-|LIO-|LON-|LUA-|LYA-|LYO-|MAR-|MED-|MHA-|MLA-|MRD-|MYA-|NCE-|NEO-|NOH-|NOP-|OCE-|PAR-|PIC-|POT-|PPA-|PRA-|RNE-|SEA-|SLA-|SNE-|SPN-|STK-|TAH-|TAS-|TET-|TRT-|VCE-|VIE-|VKY-|VNS-|VOG-|VTR-|WAS-|WKG-|WLZ-|JAD-MLD-|RTE-|NAM-|NEN-|BAL-|JLN-|YAL|MGA-|FGD-|XYAO-|BON-|ALN-|ALT-|BRA-|DBY2-|STG-|MAO-|LEM-|GOA-|FOA-|MNA-|LNA-|/i;

    return huaweiDevicesRegex.test(navigator.userAgent);
  },
  () => {
    const windowAny = window as any;
    // Check if 'huawei' object exists in window
    if (typeof windowAny.huawei !== 'undefined') {
      return true;
    }

    // Check if 'device' object exists in window and if it's manufactured by HUAWEI
    if (
      typeof windowAny.device !== 'undefined' &&
      windowAny.device.manufacturer.toLowerCase() === 'huawei'
    ) {
      return true;
    }

    // Check if 'hw' object exists in window
    if (typeof windowAny.hw !== 'undefined') {
      return true;
    }

    // Check if 'Hw' object exists in window
    if (typeof windowAny.Hw !== 'undefined') {
      return true;
    }

    // Check if 'HMJS' object exists in window
    if (typeof windowAny.HMJS !== 'undefined') {
      return true;
    }

    return false;
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Section
        elevated={true}
        title='Detect Huawei device using User Agent'
        className='pattern-2 md:mx-15 mx-4 mt-10 sm:mx-8 '
      >
        <p>
          user agent: <strong>{navigator.userAgent}</strong>
        </p>
        <br />
        <div className='max-w-full'>
          {methods.map((func, i) => (
            <div className='' key={'m' + i}>
              <h6>method {i + 1}</h6>
              <pre className='  whitespace-pre-wrap rounded-md bg-green-900/25 p-4'>
                {func.toString()}
              </pre>
              <h6>result: {func() ? 'true' : 'false'}</h6>
              <hr className='my-4' />
            </div>
          ))}
        </div>
      </Section>
    </PageWrapper>
  );
}
