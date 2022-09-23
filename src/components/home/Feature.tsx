import {
  FiCheckCircle as CheckIcon,
  FiLock as LockIcon,
  FiCreditCard as CreditCardIcon,
} from "react-icons/fi";

import { SubheaderContent } from "../../types/subheader";

interface FeatureProps {
  content: SubheaderContent;
}
export const Feature = ({ content }: FeatureProps) => {
  return (
    <section className="bg-white py-10 md:py-16 xl:relative">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col xl:flex-row justify-end items-center">
          <div className="hidden xl:block xl:absolute left-0 bottom-0 w-full">
            <img src="/assets/image/feature-img.png" alt="Feature img" />
          </div>
          <div className="max-w-[50%]">
            <h1 className="font-semibold text-gray-900 text-xl md:text-4xl text-center leading-normal mb-6">
              {content.title}
            </h1>
            <p className="font-normal text-gray-400 text-md md:text-xl text-center mb-16">
              {content.description}
            </p>

            {content.features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20"
              >
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <CheckIcon className="text-green-900 h-6 w-6" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-normal text-gray-400 text-xl leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
