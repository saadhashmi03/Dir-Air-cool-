import React, { useState, useMemo } from 'react';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_REVIEWS } from '../data/mockData';

export const GoogleReviewsSection: React.FC = () => {
  const [filterTopic, setFilterTopic] = useState<string>('all');

  const topics = [
    { id: 'all', label: 'All Reviews' },
    { id: 'jet', label: 'Jet Foam Service' },
    { id: 'prompt', label: 'Punctual & Fast' },
    { id: 'gas', label: 'Gas Refill & Cooling' },
    { id: 'polite', label: 'Polite & Clean' }
  ];

  const filteredReviews = useMemo(() => {
    if (filterTopic === 'all') return GOOGLE_REVIEWS;
    if (filterTopic === 'jet') {
      return GOOGLE_REVIEWS.filter(r => r.comment.toLowerCase().includes('clean') || r.comment.toLowerCase().includes('foam') || r.comment.toLowerCase().includes('jet') || r.acType?.toLowerCase().includes('jet'));
    }
    if (filterTopic === 'prompt') {
      return GOOGLE_REVIEWS.filter(r => r.comment.toLowerCase().includes('prompt') || r.comment.toLowerCase().includes('punctual') || r.comment.toLowerCase().includes('quickly'));
    }
    if (filterTopic === 'gas') {
      return GOOGLE_REVIEWS.filter(r => r.comment.toLowerCase().includes('gas') || r.comment.toLowerCase().includes('cooling') || r.acType?.toLowerCase().includes('gas'));
    }
    if (filterTopic === 'polite') {
      return GOOGLE_REVIEWS.filter(r => r.comment.toLowerCase().includes('polite') || r.comment.toLowerCase().includes('professional') || r.comment.toLowerCase().includes('clean'));
    }
    return GOOGLE_REVIEWS;
  }, [filterTopic]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-300 px-3.5 py-1.5 rounded-full text-xs font-black text-slate-800 shadow-xs mb-3">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.14-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Verified Google Review Summary</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Trusted by 500+ Mumbai Homes & Offices
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Authentic customer reviews from our Google Business Profile in Kamani, Kurla West and surrounding suburbs.
          </p>
        </div>

        {/* Google Score Banner Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Big 4.9 Score */}
            <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-6">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-black text-5xl sm:text-6xl text-slate-900">
                  {BUSINESS_INFO.rating}
                </span>
                <span className="text-xl text-slate-400 font-bold">/ 5.0</span>
              </div>
              
              <div className="flex items-center gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <span className="text-sm font-black text-slate-800">
                Based on {BUSINESS_INFO.reviewCount} Google Customer Reviews
              </span>
              <span className="text-xs text-slate-500 mt-0.5">
                Category: {BUSINESS_INFO.category}
              </span>
            </div>

            {/* Rating breakdown bars */}
            <div className="lg:col-span-5 space-y-2">
              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-bold text-slate-700">5 Star</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '94%' }}></div>
                </div>
                <span className="w-8 font-extrabold text-slate-700 text-right">68</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="w-12 font-bold text-slate-700">4 Star</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '6%' }}></div>
                </div>
                <span className="w-8 font-extrabold text-slate-700 text-right">4</span>
              </div>

              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-12 font-bold text-slate-700">3 Star</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-8 font-semibold text-slate-500 text-right">0</span>
              </div>

              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-12 font-bold text-slate-700">2 Star</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-8 font-semibold text-slate-500 text-right">0</span>
              </div>

              <div className="flex items-center gap-3 text-xs opacity-40">
                <span className="w-12 font-bold text-slate-700">1 Star</span>
                <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-8 font-semibold text-slate-500 text-right">0</span>
              </div>
            </div>

            {/* Google Link Button */}
            <div className="lg:col-span-3 text-center lg:text-right flex flex-col items-center lg:items-end gap-3">
              <a
                href={BUSINESS_INFO.googleSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="google-profile-view-link"
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs transition-all shadow-sm active:scale-95"
              >
                <span>View Google Maps Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-slate-500 font-medium">
                Shop No 04, Kamani, Kurla West
              </span>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {topics.map(t => (
            <button
              key={t.id}
              onClick={() => setFilterTopic(t.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap min-h-[38px] ${
                filterTopic === t.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Real Customer Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all duration-200"
            >
              <div>
                {/* Header with avatar & stars */}
                <div className="flex items-start justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
                      {review.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading font-black text-sm text-slate-900 leading-snug">
                        {review.authorName}
                      </h4>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <span>{review.location}</span>
                        <span>•</span>
                        <span>{review.date}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400 shrink-0">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Comment */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                {review.acType && (
                  <span className="text-sky-800 font-bold bg-sky-50 px-2 py-0.5 rounded text-[11px] border border-sky-100">
                    {review.acType}
                  </span>
                )}
                <span className="flex items-center gap-1 text-emerald-700 font-bold text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Google Review</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
