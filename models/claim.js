import mongoose from 'mongoose';

// Definir el esquema para la colección "claim"
const ClaimSchema = new mongoose.Schema(
  {
    influencerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Influencer', required: true }, // Relación con la colección Influencer
    content: { type: String, required: true }, // Contenido del reclamo
    verified: { type: Boolean, default: false }, // Si fue verificado
    score: { type: Number, default: 0 }, // Puntaje asignado al reclamo
    createdAt: { type: Date, default: Date.now }, // Fecha de creación
  },
  { timestamps: true } // Maneja automáticamente las fechas de creación y actualización
);

// Exportar el modelo o reutilizarlo si ya existe
const ClaimModel = mongoose.models.Claim || mongoose.model('Claim', ClaimSchema);

export default ClaimModel;
