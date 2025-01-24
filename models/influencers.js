import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

// Esquema para la colección "influencers"
const InfluencerSchema = new Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true }, // Categoría principal del influencer
    followers: { type: Number, required: true }, // Número de seguidores
    trustScore: { type: Number, default: 0 }, // Puntuación de confianza (0-100%)
    claimsCount: { type: Number, default: 0 }, // Número de afirmaciones analizadas
  },
  {
    timestamps: true, // Maneja automáticamente createdAt y updatedAt
  }
);

// Exportar el modelo, reutilizándolo si ya existe
const InfluencerModel = models.Influencer || model('Influencer', InfluencerSchema);

export default InfluencerModel;
