import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { initialWishes } from '../data/defaultWishes';

export default function VideoWishesSection({ onShowToast }) {
  const [wishes, setWishes] = useState(initialWishes);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    relation: '',
    note: '',
  });

  const fileInputRef = useRef(null);

  const handleVideoSelect = (file) => {
    if (!file) return;
    setSelectedVideo(file);
    const url = URL.createObjectURL(file);
    setVideoPreviewUrl(url);
    onShowToast?.(`Video loaded: ${file.name}`);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) handleVideoSelect(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      handleVideoSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeVideo = () => {
    if (videoPreviewUrl) {
      URL.revokeObjectURL(videoPreviewUrl);
    }
    setSelectedVideo(null);
    setVideoPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerCelebrationConfetti = () => {
    const colors = ['#c9a85c', '#ffd700', '#e26d85', '#780d1d', '#ffffff'];
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.8 },
      colors: colors,
    });
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.8 },
      colors: colors,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim() || 'A Well-Wisher';
    const relation = formData.relation.trim() || 'Guest';
    const note =
      formData.note.trim() ||
      'Sending my heartfelt congratulations and blessings to both of you!';

    const newWish = {
      id: Date.now(),
      author: name,
      relation: `${relation} • Delivered to Both Bride & Groom`,
      badgeType: selectedVideo ? 'video' : 'text',
      text: `“${note}”`,
    };

    setWishes((prev) => [newWish, ...prev]);
    triggerCelebrationConfetti();
    onShowToast?.('Your heartfelt wish has been delivered directly to Ananya & Aarav!');

    // Reset form
    setFormData({ name: '', relation: '', note: '' });
    removeVideo();
  };

  return (
    <div className="video-wishes-flow" id="video-wishes">
      <div className="section-title-block">
        <div className="title-floral-sprig">
          <svg viewBox="0 0 54 18" fill="none" className="title-floral-sprig-svg">
            <path
              d="M3,9 C15,4 22,14 27,9 C32,14 39,4 51,9"
              stroke="#c9a85c"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="27" cy="9" r="2.8" fill="#8b182b" stroke="#d4af37" strokeWidth="0.8" />
            <circle cx="22" cy="8" r="1.3" fill="#ffd700" />
            <circle cx="32" cy="8" r="1.3" fill="#ffd700" />
            <path d="M16,5 C18,3 21,6 19,9 C17,9 15,7 16,5 Z" fill="#c9a85c" />
            <path d="M38,5 C36,3 33,6 35,9 C37,9 39,7 38,5 Z" fill="#c9a85c" />
          </svg>
        </div>
        <span className="subtitle-swash">Warmest Blessings</span>
        <h2 className="main-flow-title">Personal Video Wishes</h2>
        <p className="flow-intro-text">
          Record or upload your video blessing to celebrate Ananya & Aarav. Your video will be delivered directly to both the bride and groom!
        </p>
      </div>

      <div className="video-wishes-grid">
        {/* Video Upload & Recording Box */}
        <div className="video-upload-station">
          <div
            className="upload-dropzone"
            id="video-dropzone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={() => !selectedVideo && fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              id="video-file-input"
              accept="video/*"
              className="file-hidden-input"
              onChange={handleFileChange}
            />

            {!selectedVideo ? (
              <div className="dropzone-content" id="dropzone-prompt">
                <div className="camera-icon-circle">
                  <svg className="station-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <h4 className="upload-title">Record or Upload Video Wish</h4>
                <p className="upload-subtext">Click to choose a video clip or drag & drop (MP4, MOV, WebM)</p>
                <button
                  type="button"
                  className="royal-btn-gold"
                  onClick={(e) => {
                    e.stopPropagation();
                    fileInputRef.current?.click();
                  }}
                >
                  Choose Video File
                </button>
              </div>
            ) : (
              <div className="video-preview-wrapper" id="video-preview-wrap">
                <video
                  src={videoPreviewUrl}
                  controls
                  playsInline
                  className="preview-video"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeVideo();
                  }}
                  className="remove-vid-badge"
                >
                  <svg className="badge-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>Change Video</span>
                </button>
              </div>
            )}
          </div>

          {/* Video Details Form */}
          <form id="video-wish-form" className="video-details-form" onSubmit={handleSubmit}>
            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="uploader-name" className="mini-label">YOUR NAME</label>
                <input
                  type="text"
                  id="uploader-name"
                  className="royal-input"
                  placeholder="e.g. Vikramaditya & Priya"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="uploader-relation" className="mini-label">RELATION / FAMILY</label>
                <input
                  type="text"
                  id="uploader-relation"
                  className="royal-input"
                  placeholder="e.g. Family Friends"
                  value={formData.relation}
                  onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="uploader-note" className="mini-label">BLESSING MESSAGE</label>
              <textarea
                id="uploader-note"
                className="royal-textarea"
                rows="2"
                placeholder="Write a sweet message to accompany your video wish..."
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
              />
            </div>

            {/* Destination Toggle */}
            <div className="delivery-pills-wrap">
              <span className="mini-label">DELIVER DIRECTLY TO:</span>
              <div className="delivery-pills">
                <label className="pill-check active">
                  <input type="checkbox" name="deliver_target" value="bride" defaultChecked disabled />
                  <span>Bride (Ananya)</span>
                </label>
                <label className="pill-check active">
                  <input type="checkbox" name="deliver_target" value="groom" defaultChecked disabled />
                  <span>Groom (Aarav)</span>
                </label>
              </div>
            </div>

            <button type="submit" className="submit-video-wish-btn" id="submit-wish-btn">
              <svg className="btn-inline-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Send Video Blessing to Couple</span>
            </button>
          </form>
        </div>

        {/* Video & Message Wishes Showcase Wall */}
        <div className="wishes-wall-station">
          <h3 className="showcase-heading">Blessings Wall</h3>

          <div className="wishes-stream" id="wishes-stream">
            {wishes.map((wish) => (
              <div key={wish.id} className="stream-wish-card">
                <div className="stream-card-top">
                  <span className="stream-author">{wish.author}</span>
                  <span className="stream-badge">
                    {wish.badgeType === 'video' ? (
                      <>
                        <svg className="badge-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        <span>Video Blessing Delivered</span>
                      </>
                    ) : (
                      <>
                        <svg className="badge-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span>Blessing Delivered</span>
                      </>
                    )}
                  </span>
                </div>
                <span className="stream-relation">{wish.relation}</span>
                <p className="stream-text">{wish.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
