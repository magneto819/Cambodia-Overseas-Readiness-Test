import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const wechatId = '18201809317';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full p-5 sm:p-6 md:p-8 animate-scaleIn max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
            </svg>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">添加客服微信</h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">扫描二维码或搜索微信号添加</p>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 inline-block">
              <img
                src="/weixin_image_20260114110448_760_56.jpg"
                alt="客服微信二维码"
                className="w-36 h-36 sm:w-48 sm:h-48 object-contain mx-auto"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">微信号</p>
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 tracking-wider">{wechatId}</span>
              <button
                onClick={handleCopy}
                className="p-1.5 sm:p-2 hover:bg-white rounded-lg transition-colors"
                title="复制微信号"
              >
                {copied ? (
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                ) : (
                  <Copy className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-xs sm:text-sm text-emerald-600 mt-2">已复制到剪贴板</p>
            )}
          </div>

          <div className="space-y-2 sm:space-y-3 text-left text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
            <p className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 flex-shrink-0">1.</span>
              <span>打开微信，点击右上角"+"</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 flex-shrink-0">2.</span>
              <span>选择"添加朋友"</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-emerald-500 mt-0.5 flex-shrink-0">3.</span>
              <span>粘贴微信号搜索并添加</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300"
          >
            知道了
          </button>
        </div>
      </div>
    </div>
  );
}
