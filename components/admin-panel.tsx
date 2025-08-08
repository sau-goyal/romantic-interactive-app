'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Settings, Save, Eye, EyeOff, Plus, Trash2 } from 'lucide-react'
import { RomanticConfig } from '@/lib/config'

interface AdminPanelProps {
  config: RomanticConfig
  onConfigChange: (config: RomanticConfig) => void
  isVisible: boolean
  onToggleVisibility: () => void
}

export function AdminPanel({ config, onConfigChange, isVisible, onToggleVisibility }: AdminPanelProps) {
  const [localConfig, setLocalConfig] = useState<RomanticConfig>(config)

  const handleSave = () => {
    onConfigChange(localConfig)
    localStorage.setItem('romanticConfig', JSON.stringify(localConfig))
    alert('Configuration saved successfully! 💖')
  }

  const addPhase = () => {
    setLocalConfig(prev => ({
      ...prev,
      phases: [...prev.phases, { title: "", message: "New message", duration: 3000 }]
    }))
  }

  const removePhase = (index: number) => {
    setLocalConfig(prev => ({
      ...prev,
      phases: prev.phases.filter((_, i) => i !== index)
    }))
  }

  const updatePhase = (index: number, field: string, value: any) => {
    setLocalConfig(prev => ({
      ...prev,
      phases: prev.phases.map((phase, i) => 
        i === index ? { ...phase, [field]: value } : phase
      )
    }))
  }

  const addGif = () => {
    const newGif = prompt('Enter GIF URL:')
    if (newGif) {
      setLocalConfig(prev => ({
        ...prev,
        gifs: [...prev.gifs, newGif]
      }))
    }
  }

  const removeGif = (index: number) => {
    setLocalConfig(prev => ({
      ...prev,
      gifs: prev.gifs.filter((_, i) => i !== index)
    }))
  }

  if (!isVisible) {
    return (
      <Button
        onClick={onToggleVisibility}
        className="fixed bottom-4 right-4 z-50 bg-purple-600 hover:bg-purple-700"
        size="icon"
      >
        <Settings className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Admin Panel - Customize Your Love Story
          </CardTitle>
          <Button onClick={onToggleVisibility} variant="outline" size="icon">
            <EyeOff className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="phases">Phases</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Main Title</Label>
                  <Textarea
                    id="title"
                    value={localConfig.title}
                    onChange={(e) => setLocalConfig(prev => ({ ...prev, title: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="petName1">Pet Name 1</Label>
                  <Input
                    id="petName1"
                    value={localConfig.customization.petName1}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      customization: { ...prev.customization, petName1: e.target.value }
                    }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="petName2">Pet Name 2</Label>
                  <Input
                    id="petName2"
                    value={localConfig.customization.petName2}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      customization: { ...prev.customization, petName2: e.target.value }
                    }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="loverName">Lover Name</Label>
                  <Input
                    id="loverName"
                    value={localConfig.customization.loverName}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      customization: { ...prev.customization, loverName: e.target.value }
                    }))}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="personalMessage">Personal Message</Label>
                <Textarea
                  id="personalMessage"
                  value={localConfig.customization.personalMessage}
                  onChange={(e) => setLocalConfig(prev => ({
                    ...prev,
                    customization: { ...prev.customization, personalMessage: e.target.value }
                  }))}
                  className="mt-1"
                />
              </div>
            </TabsContent>

            <TabsContent value="phases" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Message Phases</h3>
                <Button onClick={addPhase} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Phase
                </Button>
              </div>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {localConfig.phases.map((phase, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium">Phase {index + 1}</span>
                      <Button
                        onClick={() => removePhase(index)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Title (optional)"
                        value={phase.title}
                        onChange={(e) => updatePhase(index, 'title', e.target.value)}
                      />
                      <Textarea
                        placeholder="Message"
                        value={phase.message}
                        onChange={(e) => updatePhase(index, 'message', e.target.value)}
                      />
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          placeholder="Duration (ms)"
                          value={phase.duration}
                          onChange={(e) => updatePhase(index, 'duration', parseInt(e.target.value))}
                          className="w-32"
                        />
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={phase.showKiss || false}
                            onCheckedChange={(checked) => updatePhase(index, 'showKiss', checked)}
                          />
                          <Label>Show Kiss</Label>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="media" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">GIF Collection</h3>
                <Button onClick={addGif} size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add GIF
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
                {localConfig.gifs.map((gif, index) => (
                  <Card key={index} className="p-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">GIF {index + 1}</span>
                      <Button
                        onClick={() => removeGif(index)}
                        variant="destructive"
                        size="sm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <img src={gif || "/placeholder.svg"} alt={`GIF ${index + 1}`} className="w-full h-24 object-cover rounded" />
                    <Input
                      value={gif}
                      onChange={(e) => setLocalConfig(prev => ({
                        ...prev,
                        gifs: prev.gifs.map((g, i) => i === index ? e.target.value : g)
                      }))}
                      className="mt-2 text-xs"
                    />
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="backgroundColor">Background Color Class</Label>
                  <Input
                    id="backgroundColor"
                    value={localConfig.settings.backgroundColor}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      settings: { ...prev.settings, backgroundColor: e.target.value }
                    }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="textColor">Text Color Class</Label>
                  <Input
                    id="textColor"
                    value={localConfig.settings.textColor}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      settings: { ...prev.settings, textColor: e.target.value }
                    }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="particleCount">Particle Count</Label>
                  <Input
                    id="particleCount"
                    type="number"
                    value={localConfig.settings.particleCount}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      settings: { ...prev.settings, particleCount: parseInt(e.target.value) }
                    }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="floatingEmoji">Floating Emoji</Label>
                  <Input
                    id="floatingEmoji"
                    value={localConfig.settings.floatingEmoji}
                    onChange={(e) => setLocalConfig(prev => ({
                      ...prev,
                      settings: { ...prev.settings, floatingEmoji: e.target.value }
                    }))}
                    className="mt-1"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={localConfig.settings.enableMusic}
                    onCheckedChange={(checked) => setLocalConfig(prev => ({
                      ...prev,
                      settings: { ...prev.settings, enableMusic: checked }
                    }))}
                  />
                  <Label>Enable Background Music</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={localConfig.settings.enableFloatingEmojis}
                    onCheckedChange={(checked) => setLocalConfig(prev => ({
                      ...prev,
                      settings: { ...prev.settings, enableFloatingEmojis: checked }
                    }))}
                  />
                  <Label>Enable Floating Emojis</Label>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="flex justify-end gap-2 mt-6 pt-4 border-t">
            <Button onClick={onToggleVisibility} variant="outline">
              Cancel
            </Button>
            <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
