import mongoose from 'mongoose';

const ClaimSchema = new mongoose.Schema(
  {
    influencerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Influencer', // Relación con la colección influencers
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Verified', 'Questionable', 'Debunked'], // Estados válidos
      default: 'Questionable',
    },
    confidence: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    sources: [
      {
        title: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Claim || mongoose.model('Claim', ClaimSchema);
