// NewsCard.jsx
import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const NewsCard = ({ news, onBookmark, onShare }) => {
    const {
        title,
        author,
        thumbnail_url,
        details,
        rating,
        total_view,
    } = news;

    const formattedDate = new Date(news.author.published_date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-lg transition-all">
            {/* Author / Header */}
            <div className="flex items-center gap-3 p-4 border-b border-gray-100 bg-base-200">
                <img
                    src={author?.img}
                    alt={author?.name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-sm font-semibold text-gray-800">{author?.name}</h3>
                    <p className="text-xs text-gray-500">{formattedDate}</p>
                </div>

                {/* right-side icons */}
                <div className="ml-auto flex items-center gap-3">
                    <button
                        onClick={() => onBookmark && onBookmark(news)}
                        aria-label="Bookmark"
                        title="Bookmark"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FiBookmark className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={() => onShare && onShare(news)}
                        aria-label="Share"
                        title="Share"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                    >
                        <FiShare2 className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            {/* News Image */}
            <figure className="px-4 pt-4">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-lg w-full h-52 object-cover"
                />
            </figure>

            {/* News Body */}
            <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold text-gray-800">
                    {title}
                </h2>
                <p className="text-sm text-gray-600">
                    {details.length > 150 ? (
                        <>
                            {details.slice(0, 150)}...
                            <span className="text-amber-600 font-bold cursor-pointer ml-3 hover:underline">
                                Read More
                            </span>
                        </>
                    ) : (
                        details
                    )}
                </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 pb-4 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < Math.round(rating.number) ? "text-orange-500" : "text-gray-300"}
                            />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">
                        {typeof rating.number === "number" ? rating.number.toFixed(1) : rating.number}
                    </span>
                </div>

                <div className="flex items-center text-gray-600 gap-1 text-sm">
                    <FaEye className="text-gray-500" />
                    <span>{total_view.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
