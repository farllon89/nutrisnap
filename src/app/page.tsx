"use client"

import { useState } from "react"
import { Camera, Barcode, Edit3, Sparkles, Check, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"photo" | "barcode" | "manual">("photo")
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        analyzeImage()
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = () => {
    setAnalyzing(true)
    setResult(null)
    
    // Simula análise de IA
    setTimeout(() => {
      setResult({
        name: "Prato Executivo",
        items: ["Arroz branco", "Feijão preto", "Frango grelhado", "Salada verde", "Batata frita"],
        calories: 650,
        protein: 45,
        carbs: 72,
        fat: 18
      })
      setAnalyzing(false)
    }, 2500)
  }

  const resetAnalysis = () => {
    setResult(null)
    setImagePreview(null)
    setAnalyzing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Logo/Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Powered by AI</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight">
                NutriSnap
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-emerald-600 font-semibold">
                Conte suas calorias com um clique
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Cuidar da alimentação nunca foi tão simples. Tire uma foto da sua refeição e a inteligência artificial analisa automaticamente calorias, proteínas, gorduras e carboidratos.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg px-8 py-6"
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Camera className="w-5 h-5 mr-2" />
                Experimentar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Três formas de analisar
            </h2>
            <p className="text-lg text-gray-600">
              Escolha a maneira mais prática para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature 1 */}
            <Card className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                <Camera className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Tire uma foto
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Aponte a câmera para sua refeição e deixe a IA fazer o resto. Análise instantânea e precisa.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <Barcode className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Escaneie o código
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Produtos industrializados? Escaneie o código de barras e veja todas as informações nutricionais.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-emerald-200 bg-white">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Edit3 className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Descreva o prato
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Prefere digitar? Descreva sua refeição e receba a análise nutricional completa.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Experimente agora
            </h2>
            <p className="text-lg text-gray-600">
              Veja como é fácil analisar suas refeições
            </p>
          </div>

          <Card className="p-6 sm:p-8 shadow-2xl border-2 border-gray-100">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-8">
              <Button
                variant={activeTab === "photo" ? "default" : "outline"}
                className={`flex-1 ${activeTab === "photo" ? "bg-gradient-to-r from-emerald-500 to-teal-600" : ""}`}
                onClick={() => {
                  setActiveTab("photo")
                  resetAnalysis()
                }}
              >
                <Camera className="w-4 h-4 mr-2" />
                Foto
              </Button>
              <Button
                variant={activeTab === "barcode" ? "default" : "outline"}
                className={`flex-1 ${activeTab === "barcode" ? "bg-gradient-to-r from-emerald-500 to-teal-600" : ""}`}
                onClick={() => {
                  setActiveTab("barcode")
                  resetAnalysis()
                }}
              >
                <Barcode className="w-4 h-4 mr-2" />
                Código de Barras
              </Button>
              <Button
                variant={activeTab === "manual" ? "default" : "outline"}
                className={`flex-1 ${activeTab === "manual" ? "bg-gradient-to-r from-emerald-500 to-teal-600" : ""}`}
                onClick={() => {
                  setActiveTab("manual")
                  resetAnalysis()
                }}
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Descrição
              </Button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {activeTab === "photo" && (
                <div className="space-y-6">
                  {!imagePreview && !result && (
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 sm:p-16 text-center hover:border-emerald-400 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <Upload className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-lg font-semibold text-gray-700 mb-2">
                          Clique para enviar uma foto
                        </p>
                        <p className="text-sm text-gray-500">
                          ou arraste e solte aqui
                        </p>
                      </label>
                    </div>
                  )}

                  {imagePreview && (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                      />
                      {!analyzing && !result && (
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-4 right-4"
                          onClick={resetAnalysis}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  )}

                  {analyzing && (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full">
                        <div className="w-5 h-5 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin" />
                        <span className="font-medium">Analisando sua refeição...</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "barcode" && (
                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 sm:p-16 text-center">
                  <Barcode className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">
                    Scanner de código de barras
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Funcionalidade disponível no app mobile
                  </p>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-600">
                    Baixar App
                  </Button>
                </div>
              )}

              {activeTab === "manual" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descreva sua refeição
                    </label>
                    <Textarea
                      placeholder="Ex: Prato com arroz, feijão, frango grelhado e salada"
                      className="min-h-32 resize-none"
                    />
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                    onClick={analyzeImage}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Analisar Refeição
                  </Button>
                </div>
              )}

              {/* Results */}
              {result && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="flex items-center justify-between pb-4 border-b">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{result.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">Análise completa</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={resetAnalysis}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Items detected */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Itens identificados:</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.items.map((item: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm"
                        >
                          <Check className="w-3.5 h-3.5" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Macros */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 rounded-2xl text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-orange-600">{result.calories}</p>
                      <p className="text-xs sm:text-sm text-orange-700 font-medium mt-1">Calorias</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-blue-600">{result.protein}g</p>
                      <p className="text-xs sm:text-sm text-blue-700 font-medium mt-1">Proteínas</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 sm:p-6 rounded-2xl text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-amber-600">{result.carbs}g</p>
                      <p className="text-xs sm:text-sm text-amber-700 font-medium mt-1">Carboidratos</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-2xl text-center">
                      <p className="text-2xl sm:text-3xl font-bold text-purple-600">{result.fat}g</p>
                      <p className="text-xs sm:text-sm text-purple-700 font-medium mt-1">Gorduras</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                    size="lg"
                  >
                    Salvar no Diário
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-emerald-500 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Camera className="w-16 h-16 sm:w-20 sm:h-20 text-white/90 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            📸 Tirou a foto. Pronto.
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-10">
            Nutrição sob controle.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-emerald-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transition-all duration-300 text-base sm:text-lg px-8 py-6"
          >
            Começar Agora — É Grátis
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            © 2024 NutriSnap. Nutrição inteligente ao seu alcance.
          </p>
        </div>
      </footer>
    </div>
  )
}
